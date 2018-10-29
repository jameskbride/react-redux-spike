import React from 'react'

import {mount} from 'enzyme'

import Content from '../../src/components/Content'

describe('Content', () => {

  let wrapper
  let onEnableNav
  let onDisableNav

  beforeEach(() => {
    onEnableNav = jest.fn()
    onDisableNav = jest.fn()
    wrapper = mount(<Content onEnableNav={onEnableNav} onDisableNav={onDisableNav}/>)
  })

  it('renders correctly', () => {
    expect(wrapper.text()).toContain('Learn React')
    expect(wrapper.text()).toContain('Enable Navigation')
    expect(wrapper.text()).toContain('Disable Navigation')
  })

  it('disables the nav when the the disable button is clicked', () => {
    wrapper.find('#disable-button').last().simulate('click')
    expect(onDisableNav.mock.calls.length).toBe(1)
  })

  it('enables the nav when the enable button is clicked', () => {
    wrapper.find('#enable-button').last().simulate('click')
    expect(onEnableNav.mock.calls.length).toBe(1)
  })
})
