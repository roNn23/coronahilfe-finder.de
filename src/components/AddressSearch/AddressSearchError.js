import React from 'react'
import PropTypes from 'prop-types'

export const AddressSearchError = ({ onClickButton }) => {
  return (
    <p>
      Leider ist ein Fehler aufgetreten, versuche es doch gleich noch mal.
      <br />
      <button onClick={onClickButton} className="btn btn-primary comp-address-search__reset">
        Neue Suche starten
      </button>
    </p>
  )
}

AddressSearchError.propTypes = {
  onClickButton: PropTypes.func.isRequired,
}
