import React from 'react'
import './OffersList.scss'
import PropTypes from 'prop-types'
import OffersListItem from './OffersListItem'
import classNames from 'classnames'
import Select from 'react-select'

const OffersList = ({
  offers,
  radiusOptions,
  defaultRadius,
  filterOptions,
  onRadiusChange,
  onFilterChange,
  noResult,
  className,
}) => {
  const getHeadline = () => {
    let help = 'Hilfsangebote'
    const number = offers.length

    if (offers.length === 1) {
      help = 'Hilfsangebot'
    }

    return `${number} ${help} gefunden`
  }

  return (
    <div className={classNames('comp-offers-list', className)}>
      <div className="comp-offers-list__filter-wrap">
        {radiusOptions && (
          <div className="comp-offers-list__filter-item">
            <span className="comp-offers-list__filter-label">Entfernung:</span>
            <Select
              options={radiusOptions}
              defaultValue={radiusOptions.find(option => option.value === defaultRadius)}
              onChange={onRadiusChange}
              className="comp-offers-list__headline-select"
              classNamePrefix="comp-offers-list__headline-select"
              placeholder="Wählen..."
              isSearchable={false}
            />
          </div>
        )}
        <div className="comp-offers-list__filter-item">
          <span className="comp-offers-list__filter-label">Filter:</span>
          <Select
            key={JSON.stringify(filterOptions)}
            options={filterOptions}
            onChange={onFilterChange}
            className="comp-offers-list__headline-select comp-offers-list__headline-select--filter"
            classNamePrefix="comp-offers-list__headline-select"
            isClearable={true}
            isSearchable={false}
            placeholder="Wählen..."
            noOptionsMessage={() => 'Keine Angebote'}
          />
        </div>
      </div>

      {offers && offers.length > 0 && (
        <>
          <h2 className="comp-offers-list__list-headline">{getHeadline()}</h2>
          <ul className="comp-offers-list__list mb-7">
            {offers.map(offerData => (
              <OffersListItem {...offerData} key={offerData.id} />
            ))}
          </ul>
        </>
      )}
      {offers && !offers.length && <div className="mb-7">{noResult}</div>}
    </div>
  )
}

OffersList.propTypes = {
  offers: PropTypes.array,
  radiusOptions: PropTypes.array,
  defaultRadius: PropTypes.number,
  filterOptions: PropTypes.array,
  onRadiusChange: PropTypes.func,
  onFilterChange: PropTypes.func,
  noResult: PropTypes.element,
  className: PropTypes.string,
}

export default OffersList
