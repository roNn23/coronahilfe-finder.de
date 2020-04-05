import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRegionalOffers } from '../../hooks/useRegionalOffers'
import { useTags } from '../../hooks/useTags'
import OffersList from '../OffersList'
import Loading from '../Loading'

const RegionalOffers = ({ lat, lon, city, categoryId }) => {
  const [loadedOffers, setLoadedOffers] = useState([])
  const [perimeter, setPerimeter] = useState(10000)
  const [filterOptions, setFilterOptions] = useState([])
  const [filteredOffers, setFilteredOffers] = useState([])
  const tags = useTags(categoryId)
  const offers = useRegionalOffers(lat, lon, perimeter, categoryId)

  useEffect(() => {
    const filterOptions = []

    tags.forEach(tag => {
      filterOptions.push({ value: tag.id, label: tag.name, isDisabled: true })
    })

    setFilterOptions(filterOptions)
  }, [tags, filterOptions])

  useEffect(() => {
    setLoadedOffers(offers)
    setFilteredOffers(offers)

    filterOptions.forEach(function(filterOption) {
      filterOption.isDisabled = true
    })

    offers.forEach(function(offer) {
      offer.tags.forEach(function(tag) {
        const index = filterOptions.findIndex(filterOption => filterOption.value === tag.id)

        if (!filterOptions[index]) {
          return
        }

        if (index !== -1) {
          filterOptions[index].isDisabled = false
        } else {
          filterOptions[index].isDisabled = true
        }
      })
    })

    setFilterOptions(filterOptions)
  }, [offers, filterOptions])

  const handleRadiusChange = ({ value }) => {
    setPerimeter(value)
  }

  const handleFilterChange = selected => {
    const { value } = selected || {}

    if (!value) {
      setFilteredOffers(loadedOffers)
      return
    }

    const filteredOffers = loadedOffers.filter(offer => {
      return offer.tags.some(offer => offer.id === value)
    })

    setFilteredOffers(filteredOffers)
  }

  return (
    <>
      <h1>Hilfsangebote in {city}</h1>
      {!loadedOffers.length && <Loading text={'Lade Hilfsangebote'} />}
      {loadedOffers.length > 0 && (
        <OffersList
          offers={filteredOffers}
          radiusOptions={[
            { value: 10000, label: '10 km' },
            { value: 20000, label: '20 km' },
            { value: 50000, label: '50 km' },
          ]}
          defaultRadius={10000}
          filterOptions={filterOptions}
          onRadiusChange={handleRadiusChange}
          onFilterChange={handleFilterChange}
          noResult={
            <>
              <h2>Leider keine Angebote gefunden</h2>
              <p>
                Wir konnten für {city} im Umkreis von {perimeter / 1000} km leider keine Hilfsangebote finden.
              </p>
              <p>
                <strong>Kennst du vielleicht ein Angebot in der Nähe von {city}?</strong> Dann hilf uns allen und{' '}
                <strong>
                  trage deinen Tipp in unsere{' '}
                  <a href="https://forms.gle/twyugJya2gfdEMDB6" target="_blank" rel="noopener noreferrer">
                    Liste
                  </a>{' '}
                  ein
                </strong>
                . Vielen lieben Dank! 🙏
              </p>
            </>
          }
        ></OffersList>
      )}
    </>
  )
}

RegionalOffers.propTypes = {
  lat: PropTypes.string.isRequired,
  lon: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
}

export default RegionalOffers
