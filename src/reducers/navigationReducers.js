import {ENABLE_NAV, DISABLE_NAV} from '../actions/types'

export default function navigationReducer(state = [], action) {
  switch (action.type) {
    case ENABLE_NAV:
    case DISABLE_NAV:
      const backEnabled = action.payload.back
      const forwardEnabled = action.payload.forward
      return {...state, backEnabled: backEnabled, forwardEnabled: forwardEnabled}
    default:
      return state
  }
}
