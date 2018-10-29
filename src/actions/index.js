import {ENABLE_NAV, DISABLE_NAV} from './types'

export const enableNavigation = () => {
  return {
    type: ENABLE_NAV,
    payload: {
      back: true,
      forward: true
    }
  }
}

export const disableNavigation = () => {
  return {
    type: DISABLE_NAV,
    payload: {
      back: false,
      forward: false
    }
  }
}
