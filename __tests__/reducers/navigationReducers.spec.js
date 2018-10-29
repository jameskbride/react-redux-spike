import navigationReducer from '../../src/reducers/navigationReducers'
import {enableNavigation, disableNavigation} from '../../src/actions'

describe('navigationReducers', () => {

  it('maps navigation for enabled nav', () => {
    const action = enableNavigation()

    const result = navigationReducer([], action)
    
    expect(result.backEnabled).toBeTruthy()
    expect(result.forwardEnabled).toBeTruthy()
  })

  it('maps navigation for disabled nav', () => {
    const action = disableNavigation()

    const result = navigationReducer([], action)

    expect(result.backEnabled).toBeFalsy()
    expect(result.forwardEnabled).toBeFalsy()
  })
})
