import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNationalOffers } from '../../hooks/useNationalOffers'
import OffersList from '../OffersList'

const NationalOffersList = () => {
  const [loadedOffers, setLoadedOffers] = useState([])
  const [filterOptions, setFilterOptions] = useState([])
  const [filteredOffers, setFilteredOffers] = useState([])
  const offers = useNationalOffers()

  useEffect(() => {
    setLoadedOffers(offers)
    setFilteredOffers(offers)

    offers.forEach(function(offer) {
      offer.tags.forEach(function({ id, name }) {
        const isTagInOptions = filterOptions.some(filterOption => filterOption.value === id)

        if (!isTagInOptions) {
          filterOptions.push({ value: id, label: name })
        }
      })
    })

    setFilterOptions(filterOptions)
  }, [offers, filterOptions])

  const handleFilterChange = selected => {
    const selectedTagId = selected ? selected.value : null

    if (!selectedTagId) {
      setFilteredOffers(loadedOffers)
      return
    }

    const filteredOffers = loadedOffers.filter(offer => {
      return offer.tags.some(tag => tag.id === selectedTagId)
    })

    setFilteredOffers(filteredOffers)
  }

  return (
    <OffersList offers={filteredOffers} filterOptions={filterOptions} onFilterChange={handleFilterChange}></OffersList>
  )
}

NationalOffersList.propTypes = {
  lat: PropTypes.string,
  lon: PropTypes.string,
  city: PropTypes.string,
  className: PropTypes.string,
}

export default NationalOffersList
