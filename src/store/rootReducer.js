import { combineReducers } from 'redux'
import app from '../modules/dashboard/redux/reducer'

const appReducer = combineReducers({
  app,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer
