import { useState, useEffect } from 'react'
import DirectusSDK from '@directus/sdk-js'
import sort from 'fast-sort'

export function useNationalOffers() {
  const [offers, setOffers] = useState([])

  const getOffers = offers => {
    const offersWithOffers = []

    offers.forEach(location => {
      const offers = location.offers_new.reduce((array, { offer: { id, name } }) => {
        return [...array, { id, name }]
      }, [])

      location.tags = sort(offers).asc()

      offersWithOffers.push(location)
    })

    return offersWithOffers
  }

  useEffect(() => {
    const clientOptions = {
      filter: {
        country: {
          nnull: true,
        },
        city: {
          null: true,
        },
        region: {
          logical: 'or',
          null: true,
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
      const offersWithOffers = getOffers(data)

      setOffers(offersWithOffers)
    })
  }, [])

  return offers
}
