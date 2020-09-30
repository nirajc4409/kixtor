import { getAccessToken } from '../../../helper/apis'
import {
  SET_ACCESS_TOKEN,
} from './actionTypes'

export const setAccessToken = accessToken => ({
  type: SET_ACCESS_TOKEN,
  payload: getAccessToken()
})