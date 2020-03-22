import React, { useState } from 'react'
import * as Nominatim from 'nominatim-browser'
import { Formik } from 'formik'

const AddressSearch = () => {
  const [address, setAddress] = useState(null)
  const [error, setError] = useState(false)

  const searchNominatim = city => {
    return Nominatim.geocode({
      city: city,
      addressdetails: true,
    })
  }

  return (
    <>
      <Formik
        initialValues={{ city: '' }}
        onSubmit={(values, { setSubmitting }) => {
          searchNominatim(values)
            .then(results => {
              var result = results[0]
              setAddress(result.display_name)
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
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <input type="city" name="city" onChange={handleChange} onBlur={handleBlur} value={values.city} />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {address && <p>Folgende Addresse wurde gefunden: {address}</p>}
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

AddressSearch.propTypes = {}

export default AddressSearch
