import { authApiKomuto } from './api'

export const getPaymentMethods = () => {
  const axios = authApiKomuto()
  return axios.get('payment-methods').catch((err) => { throw err })
}

export const confirmTransfer = ({ id, ...action }) => {
  const axios = authApiKomuto()
  return axios.post(`buckets/${id}/bank`, action).catch((err) => { throw err })
}

export const getDokuInvoice = () => {
  const axios = authApiKomuto()
  return axios.get('payments')
}

export const payDoku = (data) => {
  const axios = authApiKomuto()
  return axios.post('payments', data)
}
