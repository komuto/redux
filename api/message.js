import { authApiKomuto } from './api'
import { buildQuery } from '../config'

export const getBuyerMessages = (params) => {
  const axios = authApiKomuto()
  const query = buildQuery(params)
  return axios.get(`users/messages?${query}`)
}

export const getSellerMessages = (params) => {
  let axios = authApiKomuto()
  const query = buildQuery(params)
  return axios.post(`users/store/messages?${query}`)
}

