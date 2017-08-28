import { authApiKomuto } from './api'
import { buildQuery } from '../config'

export const getBuyerMessages = (params) => {
  const axios = authApiKomuto()
  const query = buildQuery(params)
  return axios.get(`users/messages?${query}`)
}

export const getSellerMessages = (params) => {
  const axios = authApiKomuto()
  const query = buildQuery(params)
  return axios.get(`users/store/messages?${query}`)
}

export const getBuyerDetailMessage = ({ id }) => {
  const axios = authApiKomuto()
  return axios.get(`users/messages/${id}`)
}

export const getSellerDetailMessage = ({ id }) => {
  const axios = authApiKomuto()
  return axios.get(`users/store/messages/${id}`)
}

export const getArchiveBuyerMessages = () => {
  const axios = authApiKomuto()
  return axios.get(`users/messages?is_archived=true`)
}

export const getArchiveSellerMessages = () => {
  const axios = authApiKomuto()
  return axios.get(`users/store/messages?is_archived=true`)
}

export const updateBuyerMessage = ({ id, ...data }) => {
  const axios = authApiKomuto()
  return axios.put(`users/messages/${id}`, data)
}

export const updateSellerMessage = ({ id, ...data }) => {
  const axios = authApiKomuto()
  return axios.put(`users/store/messages/${id}`, data)
}
