import { combineReducers } from 'redux'
import navigationReducer from './navigationReducers'

export default combineReducers({
    navigation: navigationReducer
})
