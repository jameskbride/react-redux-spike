import React from 'react'

import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import configureStore from 'redux-mock-store'

import App from '../src/App'

describe("App", () => {

  let wrapper
  let store

  beforeEach(() => {
    const middlewares = []
    const mockStore = configureStore(middlewares)
    store = mockStore()
    wrapper = mount(
      <Provider store={store}>
        <App/>
      </Provider>
    )
  })

  it('renders correctly', () => {
    expect(wrapper.text()).toContain('Learn React')
  })

  it('has navigation controls', () => {
    expect(wrapper.text()).toContain("Back")
    expect(wrapper.text()).toContain("Forward")
  })
})
