import React from 'react'
import PropTypes from 'prop-types'
import './LocationsListItem.scss'

const LocationsListItem = ({ title, city, region, description, phone, opening_hours, offers, website, distance }) => {
  const distanceInKm = distance / 1000
  const distanceInKmRounded = Math.round((distanceInKm + Number.EPSILON) * 100) / 100
  const place = city || region

  return (
    <li className="comp-locations-list-item">
      <div className="comp-locations-list-item__header">
        <h3>{title}</h3>
        {place && (
          <p className="badge mr-2 comp-locations-list-item__place-badge">
            {place} ({distanceInKmRounded} km)
          </p>
        )}
      </div>
      {description && <p dangerouslySetInnerHTML={{ __html: description }}></p>}
      {opening_hours && (
        <p>
          <strong>Öffnungszeiten:</strong> {opening_hours}
        </p>
      )}

      {offers && (
        <p>
          <strong>Angebote:</strong>{' '}
          {offers.map((offer, index) => (
            <span className="badge badge-secondary mr-2" key={index}>
              {offer}
            </span>
          ))}
        </p>
      )}

      {phone.length > 0 && (
        <p>
          <strong>Telefon:</strong> {phone}
        </p>
      )}
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      )}
    </li>
  )
}

LocationsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string,
  region: PropTypes.string,
  opening_hours: PropTypes.string,
  offers: PropTypes.array,
  description: PropTypes.string,
  phone: PropTypes.array,
  website: PropTypes.string,
  distance: PropTypes.number,
}

export default LocationsListItem
