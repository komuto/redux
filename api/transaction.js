import { authApiKomuto } from './api'

export const listTransactions = () => {
  const axios = authApiKomuto()
  return axios.get('transactions').catch((err) => { throw err })
}
