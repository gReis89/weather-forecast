import React from 'react'
import { shallow } from 'enzyme'
import {WeatherForecast} from './WeatherForecast'
import {WeatherCard} from './WeatherCard'

const mockForecast = {
  clouds: {all: 68},
  dt: 1528761600,
  dt_txt: "2018-06-12 00:00:00",
  main: {temp: 10.18, temp_min: 10.18, temp_max: 10.18, pressure: 1001.05, sea_level: 1026.23},
  rain: {},
  sys: {pod: "n"},
  weather: [{id: 803, main: "Clouds", description: "broken clouds", icon: "04n"}],
  wind:{speed: 1.21, deg: 114.504}
}

describe('(Component) <WeatherForecast />', () => {
  let _component

  it('should render WeatherCard if component does receive forecast', () => {
    const props = {
      forecast: [
        [{...mockForecast}],
        [{...mockForecast}]
      ]
    }
    _component = shallow(<WeatherForecast {...props} />)
    expect(_component.find(WeatherCard).exists()).toBe(true)
    expect(_component.find(WeatherCard)).toHaveLength(2)
  })

  it('should not render WeatherCard if component does not receive forecast', () => {
    const props = {
      forecast: []
    }
    _component = shallow(<WeatherForecast {...props} />)
    expect(_component.find(WeatherCard).exists()).toBe(false)
  })
})
