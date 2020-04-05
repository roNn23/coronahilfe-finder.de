import { useState, useEffect } from 'react'
import DirectusSDK from '@directus/sdk-js'

export function useAddress(postalcode) {
  const [address, setAddress] = useState(null)

  useEffect(() => {
    const clientOptions = {
      filter: {
        postal_code: {
          eq: postalcode,
        },
      },
    }

    const client = new DirectusSDK({
      url: 'https://directus.coronahilfe-finder.de',
      project: 'coronahilfe-finder',
      storage: window.localStorage,
    })

    client.getItems('geonames', clientOptions).then(({ data }) => {
      if (!data.length) {
        setAddress({})
        return
      }

      const { latitude, longitude, place_name, postal_code } = data[0]

      setAddress({ lat: latitude, lon: longitude, city: place_name, postalcode: postal_code })
    })
  }, [postalcode])

  return address
}
