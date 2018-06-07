import React from 'react'
import { shallow } from 'enzyme'
import {WeatherDisplay, formatHour} from './WeatherDisplay'
import moment from 'moment'

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

describe('(Component) <WeatherDisplay />', () => {
  let _component

  beforeEach(() => {
    const props = {
      forecastByHour: {...mockForecast}
    }
    _component = shallow(<WeatherDisplay {...props} />)
  })

  it('should render main html components', () => {
    expect(_component.find('figure').exists()).toBe(true)
    expect(_component.find('img').exists()).toBe(true)
    expect(_component.find('span').exists()).toBe(true)
    expect(_component.find('p').exists()).toBe(true)
  })

  it('should formatHour format the hour as expected', () => {
    const hour = '21:00:00'
    expect(formatHour(hour)).toEqual('21:00')
  })
})
