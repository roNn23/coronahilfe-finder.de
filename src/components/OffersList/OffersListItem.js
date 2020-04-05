import React from 'react'
import PropTypes from 'prop-types'
import './OffersListItem.scss'

const OffersListItem = ({ title, city, region, description, phone, opening_hours, tags, website, distance }) => {
  const distanceInKm = distance / 1000
  const distanceInKmRounded = Math.round((distanceInKm + Number.EPSILON) * 100) / 100
  const place = city || region

  return (
    <li className="comp-offers-list-item">
      <div className="comp-offers-list-item__header">
        <h3 className="mb-1">{title}</h3>
        {place && (
          <p className="badge mr-2 comp-offers-list-item__place-badge">
            {place} ({distanceInKmRounded} km)
          </p>
        )}
      </div>
      {description && <p className="mb-2" dangerouslySetInnerHTML={{ __html: description }}></p>}
      {opening_hours && (
        <div className="mb-2">
          <strong>Öffnungszeiten:</strong> {opening_hours}
        </div>
      )}

      {tags && (
        <div className="mb-2">
          {tags.map(({ name }, index) => (
            <span className="badge badge-secondary mr-2" key={index}>
              {name}
            </span>
          ))}
        </div>
      )}

      {phone.length > 1 && (
        <div className="mb-2">
          <strong>Telefonnummern:</strong>{' '}
          <ul>
            {phone.map(phoneNumber => (
              <li key={phoneNumber}>{phoneNumber}</li>
            ))}
          </ul>
        </div>
      )}

      {phone.length === 1 && (
        <div className="mb-2">
          <strong>Telefonnummer:</strong> {phone[0]}
        </div>
      )}
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          Zur Webseite
        </a>
      )}
    </li>
  )
}

OffersListItem.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string,
  region: PropTypes.string,
  opening_hours: PropTypes.string,
  tags: PropTypes.array,
  description: PropTypes.string,
  phone: PropTypes.array,
  website: PropTypes.string,
  distance: PropTypes.number,
}

export default OffersListItem
