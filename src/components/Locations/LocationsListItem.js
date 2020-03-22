import React from 'react'
import PropTypes from 'prop-types'

const LocationsListItem = ({ title, description, phone, website }) => {
  return (
    <li className="comp-locations__list-item">
      <h2>{title}</h2>
      {description && <p dangerouslySetInnerHTML={{ __html: description }}></p>}
      {phone.length > 0 && <p>Telefon: {phone}</p>}
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
  description: PropTypes.string,
  phone: PropTypes.array,
  website: PropTypes.string,
}

export default LocationsListItem
