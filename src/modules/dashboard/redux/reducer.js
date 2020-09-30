import * as actionTypes from './actionTypes'
// import { deepCopy } from '../../../utils'

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ACCESS_TOKEN_LOADING:
      console.log('10::-> DEBUG SET_ACCESS_TOKEN_LOADING')
    return {
      ...state
    }
    case actionTypes.SET_ACCESS_TOKEN_SUCCESS:
      console.log('10::-> DEBUG SET_ACCESS_TOKEN_SUCCESS', action)
    return {
      ...state
    }
    case actionTypes.SET_ACCESS_TOKEN_ERROR:
      console.log('10::-> DEBUG SET_ACCESS_TOKEN_ERROR')
    return {
      ...state
    }
    default:
      return state
  }
}
