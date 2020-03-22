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

  const searchNominatim = city => {
    return Nominatim.geocode({
      city: city,
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
        initialValues={{ city: '' }}
        onSubmit={(values, { setSubmitting }) => {
          searchNominatim(values)
            .then(results => {
              var { lat, lon, display_name } = results[0]
              setAddress({ lat, lon, display_name })
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
              type="city"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
              disabled={isSubmitting || address}
            />
            <button type="submit" disabled={isSubmitting || address}>
              Submit
            </button>
            {address && (
              <p>
                Folgende Stadt wurde gefunden: <br />
                <strong>{address.display_name}</strong>
                <br />
                <button onClick={handleNewSearchClick.bind(null, resetForm)}>Neue Suche starten</button>
              </p>
            )}
            {error && (
              <p>
                Es wurde leider keine Adresse für <strong>{values.city}</strong> gefunden.
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
