import { authApiKomuto } from './api'

export const getPaymentMethods = () => {
  const axios = authApiKomuto()
  return axios.get('payment-methods').catch((err) => { throw err })
}
