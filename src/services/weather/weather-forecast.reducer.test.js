import weatherForecastReducer, {normalizeForecast} from './weather-forecast.reducer'
import * as weatherForecastActions from './weather-forecast.actions'
import initialState from '../../store/initialState'
import mockWeatherForecast from './api/weather-forecast.mock.data.json'

describe('(Reducers) Weather Forecast', () => {
  it('should export reducers function', () => {
    expect(weatherForecastReducer).toBeDefined()
  })

  it('should handle REQUEST Action', () => {
    const store = weatherForecastReducer(initialState,
      {type: weatherForecastActions.REQUEST})
    expect(store).toEqual({
      ...initialState,
      loading: 1
    })
  })

  it('should handle RECEIVE_FORECAST Action', () => {
    const store = weatherForecastReducer(initialState,
      {type: weatherForecastActions.RECEIVE_FORECAST, data: mockWeatherForecast.list })
    expect(store).toEqual({
      ...initialState,
      loading: -1,
      forecast: normalizeForecast(mockWeatherForecast.list)
    })
  })
})
