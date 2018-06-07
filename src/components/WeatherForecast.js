import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WeatherCard from './WeatherCard'

export const WeatherForecast = ({forecast}) => (
  <div>
    {
      forecast && forecast.map((forecast, i) => (
          <WeatherCard forecast={forecast} key={i} />
        )
      )
    }
  </div>
)

WeatherForecast.propTypes = {
  forecast: PropTypes.array.isRequired
}

export default WeatherForecast
