import * as weatherForecastActions from './weather-forecast.actions'
import initialState from '../../store/initialState'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import mockWeatherForecast from './api/weather-forecast.mock.data.json'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('(Redux Actions) Weather Forecast', () => {
  /**
   * Test for exporting action types
   */
  it('should export REQUEST', () => {
    expect(weatherForecastActions.REQUEST).toEqual('REQUEST')
  })

  it('should export RECEIVE_FORECAST', () => {
    expect(weatherForecastActions.RECEIVE_FORECAST).toEqual('RECEIVE_FORECAST')
  })

  /**
   * Action tests
   */
  it('REQUEST Action', () => {
    expect(weatherForecastActions.request()).toEqual(
      { type: weatherForecastActions.REQUEST }
    )
  })

  it('RECEIVE_FORECAST Action', () => {
    expect(weatherForecastActions.receiveForecast('mock')).toEqual(
      { type: weatherForecastActions.RECEIVE_FORECAST, data: 'mock' }
    )
  })

  /**
   * Methods
   */
   it('creates "RECEIVE_FORECAST" when fetchWeatherForecast is complete', () => {
     const expectedActions = [
       { type: weatherForecastActions.REQUEST },
       { type: weatherForecastActions.RECEIVE_FORECAST, data: mockWeatherForecast.list }
     ]
     const store = mockStore(initialState)
     return store.dispatch(weatherForecastActions.fetchWeatherForecast())
       .then(() => {
         expect(store.getActions()).toEqual(expectedActions)
       })
   })
})
