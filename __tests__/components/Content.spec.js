import React from 'react'

import {mount} from 'enzyme'

import Content from '../../src/components/Content'

describe('Content', () => {

  it('renders correctly', () => {
    const wrapper = mount(<Content />)

    expect(wrapper.text()).toContain('Learn React')
    expect(wrapper.text()).toContain('Enable Navigation')
    expect(wrapper.text()).toContain('Disable Navigation')
  })
})
