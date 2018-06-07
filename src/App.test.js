import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import sinon from 'sinon'

describe('(Container) <App />', () => {
  let _component
  const fetchWeatherForecast = sinon.spy()

  beforeEach(() => {
    const props = {
      actions: {
        fetchWeatherForecast
      },
      forecast: [],
      loading: 0
    }
    _component = shallow(<App {...props} />)
  })

  it('Renders WeatherForecast Component', () => {
    expect(_component.find('WeatherForecast')).not.toBeNull()
  })

  it('Should dispatch fetchWeatherForecast action when componentDidMount', () => {
    _component.instance().componentDidMount()
    expect(fetchWeatherForecast.called).toBe(true)
  })
})
