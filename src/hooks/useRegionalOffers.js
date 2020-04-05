import { useState, useEffect } from 'react'
import { getBoundsOfDistance, getDistance } from 'geolib'
import DirectusSDK from '@directus/sdk-js'
import sort from 'fast-sort'

export function useRegionalOffers(lat, lon, perimeter, categoryId) {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    if (!lat || !lon || !perimeter) {
      return
    }

    const getOffersInPerimeter = offers => {
      const regionalOffers = offers.filter(offer => offer.city || offer.region)

      regionalOffers.map(offer => {
        return (offer.distance = getDistance(
          { latitude: lat, longitude: lon },
          { latitude: offer.lat, longitude: offer.lng },
        ))
      })

      regionalOffers.filter(offer => offer.distance < perimeter)

      sort(regionalOffers).asc(offer => offer.distance)

      return regionalOffers
    }

    const getTags = offers => {
      const offersWithTags = []

      offers.forEach(offer => {
        const offers = offer.offers_new.reduce((array, { offer: { id, name } }) => {
          return [...array, { id, name }]
        }, [])

        offer.tags = sort(offers).asc()

        offersWithTags.push(offer)
      })

      return offersWithTags
    }

    const [boundTopLeft, boundBottomRight] = getBoundsOfDistance({ latitude: lat, longitude: lon }, perimeter)
    const clientOptions = {
      filter: {
        lat: {
          between: `${boundTopLeft.latitude},${boundBottomRight.latitude}`,
        },
        lng: {
          between: `${boundTopLeft.longitude},${boundBottomRight.longitude}`,
        },
      },
      fields: [
        'id',
        'title',
        'lat',
        'lng',
        'description',
        'city',
        'region',
        'country',
        'website',
        'phone',
        'mail',
        'opening_hours',
        'address',
        'offers_new.offer.id',
        'offers_new.offer.name',
        'categories.categories_id',
      ],
    }
    const client = new DirectusSDK({
      url: 'https://directus.coronahilfe-finder.de',
      project: 'coronahilfe-finder',
      storage: window.localStorage,
    })

    client.getItems('locations', clientOptions).then(({ data }) => {
      const offersInPerimeter = getOffersInPerimeter(data)
      const offersWithTags = getTags(offersInPerimeter)

      setOffers(offersWithTags)
    })
  }, [lat, lon, perimeter])

  return offers
}
