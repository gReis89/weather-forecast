import React from 'react'
import PropTypes from 'prop-types'

export const formatHour = (hour) => {
  return hour.split(':')[0] + ':' + hour.split(':')[1]
}

export const WeatherDisplay = ({forecastByHour}) => (
  <div className="level-item has-text-left">
    <div>
      <figure className="heading image is-48x48">
        <img className='weather-icon'
        src={`https://openweathermap.org/img/w/${forecastByHour.weather[0].icon}.png`}
        alt="Weather icon" />
      </figure>
      <div>
        <span className='tag'>{formatHour(forecastByHour.dt_txt.split(' ')[1])}</span>
        <p className="title is-4">{forecastByHour.main.temp} <span>&#176;C</span></p>
        <p className="is-6">
          <span className='caret-down'>&#9660;</span>{forecastByHour.main.temp_min}
          {' '}
          <span className='caret-up'>&#9650;</span>{forecastByHour.main.temp_max}
        </p>
      </div>
    </div>
  </div>
)

WeatherDisplay.propTypes = {
  forecastByHour: PropTypes.object.isRequired
}

export default WeatherDisplay
