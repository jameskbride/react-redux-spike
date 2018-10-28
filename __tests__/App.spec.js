import React from 'react'

import { mount } from 'enzyme'

import App from '../src/App'

describe("App", () => {

  it('renders correctly', () => {
    const wrapper = mount(<App/>)

    expect(wrapper.text()).toContain('Learn React')
  })
})
