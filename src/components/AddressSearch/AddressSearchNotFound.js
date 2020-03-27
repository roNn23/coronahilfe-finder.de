import React from 'react'
import PropTypes from 'prop-types'

export const AddressSearchNotFound = ({ input, onClickButton }) => {
  if (!input) {
    return null
  }

  return (
    <p>
      Es wurde leider keine Stadt für <strong>{input}</strong> gefunden.
      <br />
      <button onClick={onClickButton} className="btn btn-primary comp-address-search__reset">
        Neue Suche starten
      </button>
    </p>
  )
}

AddressSearchNotFound.propTypes = {
  input: PropTypes.string,
  onClickButton: PropTypes.func.isRequired,
}
