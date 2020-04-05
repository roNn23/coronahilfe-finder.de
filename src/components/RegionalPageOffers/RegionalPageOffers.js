import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Loading from '../Loading'
import { useAddress } from '../../hooks/useAddress'
import RegionalOffers from '../RegionalOffers'
import PropTypes from 'prop-types'

const RegionalPageOffers = ({ postalcode }) => {
  const address = useAddress(postalcode)

  return (
    <>
      {!address && (
        <>
          <h1>Hilfsangebote</h1>
          <Loading text={'Suche Stadt'} />
        </>
      )}
      {address && !address.lat && (
        <Alert variant="danger">
          <strong>Fehler:</strong> Keine Stadt für die PLZ <strong>{postalcode}</strong> gefunden
        </Alert>
      )}
      {address && address.lat && (
        <RegionalOffers lat={address.lat} lon={address.lon} city={address.city} categoryId={1} />
      )}
    </>
  )
}

RegionalPageOffers.propTypes = {
  postalcode: PropTypes.string.isRequired,
}

export default RegionalPageOffers
