import React, { useState, useEffect } from 'react'
import * as Nominatim from 'nominatim-browser'
import { Formik } from 'formik'
import PropTypes from 'prop-types'

const AddressSearch = ({ onAddressFound }) => {
  const [address, setAddress] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    onAddressFound(address)
  }, [address])

  const searchNominatim = postalcode => {
    return Nominatim.geocode({
      postalcode: postalcode,
      addressdetails: true,
    })
  }

  const handleNewSearchClick = resetForm => {
    setAddress(null)
    resetForm()
  }

  return (
    <>
      <Formik
        initialValues={{ postalcode: '' }}
        onSubmit={(values, { setSubmitting }) => {
          searchNominatim(values.postalcode)
            .then(results => {
              var {
                lat,
                lon,
                address: { town, city },
              } = results[0]
              setAddress({ lat, lon, city: town || city })
              setError(false)
              setSubmitting(false)
            })
            .catch(error => {
              setAddress(null)
              setError(true)
              setSubmitting(false)
            })
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="postalcode"
              name="postalcode"
              placeholder="PLZ"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postalcode}
              disabled={isSubmitting || address}
            />
            <button type="submit" disabled={isSubmitting || address}>
              Submit
            </button>
            {address && (
              <p>
                Folgende Stadt wurde gefunden: <strong>{address.city}</strong>
                <br />
                <button onClick={handleNewSearchClick.bind(null, resetForm)}>Neue Suche starten</button>
              </p>
            )}
            {error && (
              <p>
                Es wurde leider keine Adresse für <strong>{values.postalcode}</strong> gefunden.
              </p>
            )}
          </form>
        )}
      </Formik>
    </>
  )
}

AddressSearch.propTypes = {
  onAddressFound: PropTypes.func.isRequired,
}

export default AddressSearch
