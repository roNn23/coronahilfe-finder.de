import React, { useState, useEffect } from 'react'
import * as Nominatim from 'nominatim-browser'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import './AddressSearch.scss'

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
    <div className="comp-address-search">
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
          <>
            {!address && (
              <form onSubmit={handleSubmit} className="comp-address-search__form">
                <input
                  type="postalcode"
                  name="postalcode"
                  placeholder="PLZ"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.postalcode}
                  disabled={isSubmitting || address}
                  className="comp-address-search__input"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || address}
                  className="btn btn-primary comp-address-search__submit"
                >
                  Suche
                </button>
              </form>
            )}
            <div className="comp-address-search__result">
              {address && (
                <p>
                  Folgende Stadt wurde gefunden: <strong>{address.city}</strong>
                  <br />
                  <button
                    onClick={handleNewSearchClick.bind(null, resetForm)}
                    className="btn btn-primary comp-address-search__reset"
                  >
                    Neue Suche starten
                  </button>
                </p>
              )}
              {error && (
                <p>
                  Es wurde leider keine Adresse für <strong>{values.postalcode}</strong> gefunden.
                </p>
              )}
            </div>
          </>
        )}
      </Formik>
    </div>
  )
}

AddressSearch.propTypes = {
  onAddressFound: PropTypes.func.isRequired,
}

export default AddressSearch
