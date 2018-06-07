import initialState from '../../store/initialState'
import * as actions from './weather-forecast.actions'

/**
 * Group forecasts into a daily list for display
 * @param  {Array} forecast list of weather forecasts
 * @return {Array}          grouped list of weather forecasts by day
 */
export const normalizeForecast = (forecast) => {
  const listByDay = []
  let dailyForecast = []
  forecast.forEach((item, i) => {
    dailyForecast.push(item)
    if (item.dt_txt.split(' ')[0] !== (forecast[i+1] && forecast[i+1].dt_txt.split(' ')[0])) {
      listByDay.push(dailyForecast)
      dailyForecast = []
    }
  })
  return listByDay
}

/**
 * Reducer for weather forecast
 * @param  {Object} [state=initialState] current app state
 * @param  {Object} action               dispatched action
 * @return {Object}                      a brand new state
 */
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REQUEST:
      return {
        ...state,
        loading: state.loading + 1
      }
    case actions.RECEIVE_FORECAST:
      return {
        ...state,
        loading: state.loading - 1,
        forecast: normalizeForecast(action.data)
      }
    default:
      return state
  }
}

export default weatherReducer
