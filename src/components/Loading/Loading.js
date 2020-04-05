import React from 'react'
import PropTypes from 'prop-types'
import './Loading.scss'
import Loader from 'react-loader-spinner'

const Loading = ({ text }) => {
  return (
    <div className="comp-loading">
      <Loader type="Puff" color="#05668d" height={35} width={35} />
      <p className="comp-loading__text">{text}</p>
    </div>
  )
}

Loading.propTypes = {
  text: PropTypes.string,
}

export default Loading
