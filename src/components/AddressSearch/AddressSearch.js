import React, { useState, useEffect } from 'react'
import DirectusSDK from '@directus/sdk-js'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import './AddressSearch.scss'

const AddressSearch = ({ onAddressFound }) => {
  const [address, setAddress] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    onAddressFound(address)
  }, [address])

  const getAddress = postalcode => {
    const client = new DirectusSDK({
      url: 'https://directus.coronahilfe-finder.de',
      project: 'coronahilfe-finder',
      storage: window.localStorage,
    })

    return client.getItems('geonames', {
      filter: {
        postal_code: {
          eq: postalcode,
        },
      },
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
          getAddress(values.postalcode)
            .then(result => {
              var { latitude, longitude, place_name } = result.data[0]
              setAddress({ lat: latitude, lon: longitude, city: place_name })
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
