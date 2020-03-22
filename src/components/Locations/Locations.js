import React, { useState, useEffect } from 'react'
import DirectusSDK from '@directus/sdk-js'
import { getBoundsOfDistance } from 'geolib'
import './Locations.scss'
import PropTypes from 'prop-types'

const Locations = ({ lat, lon }) => {
  const [locations, setLocations] = useState(null)

  useEffect(() => {
    const [boundTopLeft, boundBottomRight] = getBoundsOfDistance({ latitude: lat, longitude: lon }, 1000)

    const client = new DirectusSDK({
      url: 'https://corona-hilfe-finder.de/directus/public/',
      project: 'coronahilfe-finder',
      storage: window.localStorage,
    })

    client
      .getItems('locations', {
        filter: {
          lat: {
            gt: boundTopLeft.latitude,
            lt: boundBottomRight.latitude,
          },
          lng: {
            gt: boundTopLeft.longitude,
            lt: boundBottomRight.longitude,
          },
        },
      })
      .then(({ data }) => {
        setLocations(data)
      })
    // todo .catch(error => console.error(error))
  }, [])

  return (
    <div className="comp-locations">
      {locations && (
        <ul className="comp-locations__list">
          {locations.map(({ id, title, description, phone }) => (
            <li key={id} className="comp-locations__list-item">
              <h2>{title}</h2>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
              <p>Phone: {phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

Locations.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number,
}

export default Locations
