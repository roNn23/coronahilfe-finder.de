import React from 'react'
import PropTypes from 'prop-types'

const LocationsListItem = ({ title, city, region, description, phone, opening_hours, offers, website }) => {
  return (
    <li className="comp-locations__list-item">
      <h3>{title}</h3>
      {city && <p className="badge badge-secondary mr-2">{city}</p>}
      {region && <p className="badge badge-secondary mr-2">{region}</p>}
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
}

export default LocationsListItem
