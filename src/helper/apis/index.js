import axios from 'axios'
import { tempResolve } from '../../utils/index'
import { getBaseUrl } from './urls'

export const getAccessToken = async () => {
  const url = getBaseUrl('baseUrl')
  const data = {accessToken: 'ertestestadsf32453sdf324523'}
  const res = await tempResolve(data)
  return res
}