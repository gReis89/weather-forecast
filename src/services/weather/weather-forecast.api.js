import {constants} from '../../config'
import axios from 'axios'

/**
 * get weather forecast from OpenWeatherMap API
 * @return {Promise} return a promise with the forecast data
 */
export const getForecast = (city) => {
  const params = {
    q: city,
    appid: constants.OPEN_WEATHER_TOKEN,
    units: 'metric'
  }
  return axios.get(constants.OPEN_WEATHER_API + 'forecast', {params})
    .then(response => {
      return Promise.resolve(response.data.list)
    })
}
