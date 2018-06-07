import mockWeatherForecast from './weather-forecast.mock.data.json'

const delay = 300

export const getForecast = (city) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockWeatherForecast.list)
    }, delay)
  })
}
