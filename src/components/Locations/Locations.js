import React, { useState, useEffect } from 'react'
import DirectusSDK from '@directus/sdk-js'
import { getBoundsOfDistance } from 'geolib'
import './Locations.scss'
import PropTypes from 'prop-types'

const Locations = ({ lat, lon }) => {
  const [localLocations, setLocalLocations] = useState(null)
  const [countryLocations, setCountryLocations] = useState(null)

  useEffect(() => {
    const [boundTopLeft, boundBottomRight] = getBoundsOfDistance({ latitude: lat, longitude: lon }, 10000)
    const client = new DirectusSDK({
      url: 'https://directus.coronahilfe-finder.de',
      project: 'coronahilfe-finder',
      storage: window.localStorage,
    })

    client
      .getItems('locations', {
        filter: {
          lat: {
            between: `${boundTopLeft.latitude},${boundBottomRight.latitude}`,
          },
          lng: {
            between: `${boundTopLeft.longitude},${boundBottomRight.longitude}`,
          },
        },
      })
      .then(({ data }) => {
        setLocalLocations(data)
      })
    // todo .catch(error => console.error(error))

    client
      .getItems('locations', {
        filter: {
          country: {
            nnull: true,
          },
          city: {
            null: true,
          },
        },
      })
      .then(({ data }) => {
        setCountryLocations(data)
      })
  }, [])

  return (
    <div className="comp-locations">
      <h2>Ergebnisse für deine Stadt</h2>
      {localLocations && (
        <ul className="comp-locations__list mb-5">
          {localLocations.map(({ id, title, description, phone, website }) => (
            <li key={id} className="comp-locations__list-item">
              <h2>{title}</h2>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
              {phone.length > 0 && <p>Telefon: {phone}</p>}
              <a href={website} target="_blank" rel="noopener noreferrer">
                {website}
              </a>
            </li>
          ))}
        </ul>
      )}
      <h2>Angebote in ganz Deutschland</h2>
      {countryLocations && (
        <ul className="comp-locations__list">
          {countryLocations.map(({ id, title, description, phone, website }) => (
            <li key={id} className="comp-locations__list-item">
              <h2>{title}</h2>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
              {phone.length > 0 && <p>Telefon: {phone}</p>}
              <a href={website} target="_blank" rel="noopener noreferrer">
                {website}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

Locations.propTypes = {
  lat: PropTypes.string,
  lon: PropTypes.string,
}

export default Locations
