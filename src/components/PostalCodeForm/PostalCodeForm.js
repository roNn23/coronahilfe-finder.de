import React from 'react'
import { navigate } from 'gatsby'
import { Formik } from 'formik'
import './PostalCodeForm.scss'

const PostalCodeForm = () => {
  return (
    <div className="comp-postal-code-form">
      <Formik
        initialValues={{ postalcode: '' }}
        onSubmit={({ postalcode }) => {
          navigate(`/regional/${postalcode}`)
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, resetForm }) => (
          <form onSubmit={handleSubmit} className="comp-postal-code-form__form">
            <input
              type="postalcode"
              name="postalcode"
              placeholder="PLZ"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postalcode}
              disabled={isSubmitting}
              className="comp-postal-code-form__input"
            />
            <button
              type="submit"
              disabled={isSubmitting || !values.postalcode.length}
              className="btn btn-primary comp-postal-code-form__submit"
            >
              Hilfsangebote zeigen
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default PostalCodeForm
