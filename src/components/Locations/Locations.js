import React, { useState, useEffect } from 'react'
import DirectusSDK from '@directus/sdk-js'
import { getBoundsOfDistance, getDistance } from 'geolib'
import './Locations.scss'
import PropTypes from 'prop-types'
import LocationsListItem from './LocationsListItem'
import classNames from 'classnames'
import sort from 'fast-sort'
import Select from 'react-select'

const Locations = ({ lat, lon, city, className }) => {
  const [localLocations, setLocalLocations] = useState([])
  const [countryLocations, setCountryLocations] = useState(null)
  const [perimeter, setPerimeter] = useState(10000)
  const selectOptions = [
    { value: 10000, label: '10 km' },
    { value: 25000, label: '25 km' },
    { value: 50000, label: '50 km' },
    { value: 100000, label: '100 km' },
    { value: 150000, label: '150 km' },
  ]

  useEffect(() => {
    const [boundTopLeft, boundBottomRight] = getBoundsOfDistance({ latitude: lat, longitude: lon }, perimeter)
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
        const locationsWithoutCountryLocations = data.filter(item => item.city || item.region)

        locationsWithoutCountryLocations.map(location => {
          return (location.distance = getDistance(
            { latitude: lat, longitude: lon },
            { latitude: location.lat, longitude: location.lng },
          ))
        })

        const locationsInPerimeter = locationsWithoutCountryLocations.filter(location => location.distance < perimeter)
        sort(locationsInPerimeter).asc(location => location.distance)
        setLocalLocations(locationsInPerimeter)
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
  }, [lat, lon, perimeter])

  const handlePerimeterChange = ({ value }) => {
    setPerimeter(value)
  }

  const getLocationsNumber = () => {
    if (localLocations.length) {
      return localLocations.length
    }

    return 'Keine'
  }

  return (
    <div className={classNames('comp-locations', className)}>
      <h2 className="comp-locations__headline">
        {getLocationsNumber()} Angebote für {city} im Umkreis von{' '}
        <Select
          options={selectOptions}
          defaultValue={selectOptions.find(option => option.value === perimeter)}
          onChange={handlePerimeterChange}
          className="comp-locations__headline-select"
          classNamePrefix="comp-locations__headline-select"
        />
      </h2>
      {localLocations && localLocations.length > 0 && (
        <ul className="comp-locations__list mb-7">
          {localLocations.map(locationData => (
            <LocationsListItem {...locationData} key={locationData.id} />
          ))}
        </ul>
      )}
      {localLocations && !localLocations.length && (
        <div className="mb-7">
          <p>
            Wir konnten für {city} im Umkreis von {perimeter / 1000} km leider keine Hilfsangebote finden.
          </p>
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
