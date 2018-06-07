import React from 'react'
import { shallow } from 'enzyme'
import { SpinnerLoader } from './SpinnerLoader'

describe('(Component) <SpinnerLoader />', () => {
  let _component

  it('should render loader if isLoading > 0', () => {
    const props = {
      isLoading: 1
    }
    _component = shallow(<SpinnerLoader {...props} />)
    expect(_component.find('div').exists()).toBe(true)
  })

  it('should not render loader if isLoading equal 0', () => {
    const props = {
      isLoading: 0
    }
    _component = shallow(<SpinnerLoader {...props} />)
    expect(_component.find('div').exists()).toBe(false)
  })
})
