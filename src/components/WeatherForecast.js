import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WeatherCard from './WeatherCard'

export class WeatherForecast extends Component {
  render () {
    return (
      <div>
        {console.log(this.props.forecast)}
        {
          this.props.forecast && this.props.forecast.map((forecast, i) => (
              <WeatherCard forecast={forecast} key={i} />
            )
          )
        }
      </div>
    )
  }
}

WeatherForecast.propTypes = {
  forecast: PropTypes.array.isRequired
}

export default WeatherForecast
