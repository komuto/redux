import { authApiKomuto } from './api'
import { buildQuery } from '../config'

export const getPaymentMethods = () => {
  const axios = authApiKomuto()
  return axios.get('payment-methods')
}

export const confirmTransfer = ({ id, ...action }) => {
  const axios = authApiKomuto()
  return axios.post(`buckets/${id}/bank`, action)
}

export const withdraw = (data) => {
  const axios = authApiKomuto()
  return axios.post('users/saldo/withdraw', data)
}

export const getMidtransToken = (data) => {
  const axios = authApiKomuto()
  const query = buildQuery(data)
  return axios.get(`payments?${query}`)
}
