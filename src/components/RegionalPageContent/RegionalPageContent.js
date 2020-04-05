import React from 'react'
import PostalCodeForm from '../PostalCodeForm'

const RegionalPageContent = () => {
  return (
    <>
      <h1>Regionale Coronahilfen</h1>
      <p>Finde Hilfesuchende in deinem Umkreis oder Hilfsangebote in einer bestimmten Stadt!</p>
      <div className="mb-6">
        <PostalCodeForm />
      </div>
    </>
  )
}

export default RegionalPageContent
