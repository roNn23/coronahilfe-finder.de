import React, { useState, useEffect } from 'react'
import DirectusSDK from '@directus/sdk-js'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import './AddressSearch.scss'
import { AddressSearchResolved } from './AddressSearchResolved'
import { AddressSearchNotFound } from './AddressSearchNotFound'
import { AddressSearchError } from './AddressSearchError'
import * as Loads from 'react-loads'

const AddressSearch = ({ onAddressFound }) => {
  const [address, setAddress] = useState(null)
  const [noAddressFound, setNoAddressFound] = useState(null)

  useEffect(() => {
    onAddressFound(address)
  }, [address, onAddressFound])

  async function fetchCity(postalcode) {
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

  const { response, error, load, isIdle, isResolved, reset } = Loads.useDeferredLoads('city', fetchCity)

  useEffect(() => {
    if (!response) {
      return
    }

    const { data } = response

    if (!data.length) {
      setNoAddressFound(true)
      return
    }

    var { latitude, longitude, place_name } = data[0]

    setAddress({ lat: latitude, lon: longitude, city: place_name })
  }, [response])

  const handleNewSearchClick = resetForm => {
    setAddress(null)
    setNoAddressFound(null)
    reset()
    resetForm()
  }

  return (
    <div className="comp-address-search">
      <Formik
        initialValues={{ postalcode: '' }}
        onSubmit={values => {
          load(values.postalcode)
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, resetForm }) => (
          <>
            {!isResolved && (
              <form onSubmit={handleSubmit} className="comp-address-search__form">
                <input
                  type="postalcode"
                  name="postalcode"
                  placeholder="PLZ"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.postalcode}
                  disabled={!isIdle}
                  className="comp-address-search__input"
                />
                <button
                  type="submit"
                  disabled={!isIdle || !values.postalcode.length}
                  className="btn btn-primary comp-address-search__submit"
                >
                  Suche
                </button>
              </form>
            )}
            <div className="comp-address-search__result">
              {isResolved && (
                <AddressSearchResolved
                  city={address && address.city}
                  onClickButton={handleNewSearchClick.bind(null, resetForm)}
                />
              )}
              {error && <AddressSearchError onClickButton={handleNewSearchClick.bind(null, resetForm)} />}
              {noAddressFound && (
                <AddressSearchNotFound
                  input={values.postalcode}
                  onClickButton={handleNewSearchClick.bind(null, resetForm)}
                />
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
