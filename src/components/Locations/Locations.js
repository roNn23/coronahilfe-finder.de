import React, { useState, useEffect } from 'react'
import DirectusSDK from '@directus/sdk-js'
import { getBoundsOfDistance } from 'geolib'
import './Locations.scss'
import PropTypes from 'prop-types'
import LocationsListItem from './LocationsListItem'
import classNames from 'classnames'

const Locations = ({ lat, lon, city, className }) => {
  const [localLocations, setLocalLocations] = useState(null)
  const [countryLocations, setCountryLocations] = useState(null)

  useEffect(() => {
    const [boundTopLeft, boundBottomRight] = getBoundsOfDistance({ latitude: lat, longitude: lon }, 25000)
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
          region: {
            logical: 'or',
            null: true,
          },
        },
      })
      .then(({ data }) => {
        setCountryLocations(data)
      })
  }, [lat, lon])

  return (
    <div className={classNames('comp-locations', className)}>
      <h2 className="comp-locations__headline">Angebote für {city}</h2>
      {localLocations && localLocations.length > 0 && (
        <ul className="comp-locations__list mb-7">
          {localLocations.map(locationData => (
            <LocationsListItem {...locationData} key={locationData.id} />
          ))}
        </ul>
      )}
      {localLocations && !localLocations.length && (
        <div className="mb-7">
          <p>Wir konnten für {city} leider noch keine Hilfsangeboten finden.</p>
          <p>
            <strong>Kennst du vielleicht ein Angebot in der Nähe von {city}?</strong> Dann hilf uns allen und{' '}
            <strong>
              trage deinen Tipp in unsere{' '}
              <a href="https://forms.gle/twyugJya2gfdEMDB6" target="_blank" rel="noopener noreferrer">
                Liste
              </a>{' '}
              ein
            </strong>
            . Vielen lieben Dank! 🙏
          </p>
        </div>
      )}
      <h2 className="comp-locations__headline">Deutschlandweite Angebote</h2>
      {countryLocations && (
        <ul className="comp-locations__list">
          {countryLocations.map(locationData => (
            <LocationsListItem {...locationData} key={locationData.id} />
          ))}
        </ul>
      )}
    </div>
  )
}

Locations.propTypes = {
  lat: PropTypes.string,
  lon: PropTypes.string,
  city: PropTypes.string,
  className: PropTypes.string,
}

export default Locations
