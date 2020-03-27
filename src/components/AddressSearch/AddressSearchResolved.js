import React from 'react'
import PropTypes from 'prop-types'

export const AddressSearchResolved = ({ city, onClickButton }) => {
  if (!city) {
    return null
  }

  return (
    <p>
      Folgende Stadt wurde gefunden: <strong>{city}</strong>
      <br />
      <button onClick={onClickButton} className="btn btn-primary comp-address-search__reset">
        Neue Suche starten
      </button>
    </p>
  )
}

AddressSearchResolved.propTypes = {
  city: PropTypes.string,
  onClickButton: PropTypes.func.isRequired,
}
