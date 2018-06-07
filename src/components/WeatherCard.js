import React from 'react'
import PropTypes from 'prop-types'
import WeatherDisplay from './WeatherDisplay'
import moment from 'moment'

export const WeatherCard = ({forecast}) => (
  <div className='card box'>
    <header>
      <h5 className='title is-5'>
        {moment(forecast[0].dt_txt.split(' ')[0]).format('LLLL')}
      </h5>
    </header>
    <hr />
    <div className='card-content'>
      <nav className="level">
        {
          forecast.map((item, i) => (
            <WeatherDisplay key={i} forecastByHour={item} />
          ))
        }
      </nav>
    </div>
  </div>
)

WeatherCard.propTypes = {
  forecast: PropTypes.array.isRequired
}

export default WeatherCard
