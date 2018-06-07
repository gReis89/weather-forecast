import React from 'react'
import { shallow } from 'enzyme'
import {WeatherCard} from './WeatherCard'
import {WeatherDisplay} from './WeatherDisplay'
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

describe('(Component) <WeatherCard />', () => {
  let _component

  it('should render header with right date', () => {
    const props = {
      forecast: [
        {...mockForecast}
      ]
    }
    _component = shallow(<WeatherCard {...props} />)
    expect(_component.find('header').exists()).toBe(true)
    expect(_component.find('h5').text()).toEqual(moment(mockForecast.dt_txt.split(' ')[0]).format('LLLL'))
  })

  it('should WeatherDisplay render three times', () => {
    const props = {
      forecast: [
        {...mockForecast},
        {...mockForecast},
        {...mockForecast}
      ]
    }
    _component = shallow(<WeatherCard {...props} />)
    expect(_component.find(WeatherDisplay).exists()).toBe(true)
    expect(_component.find(WeatherDisplay)).toHaveLength(3)
  })
})
