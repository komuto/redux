import { publicApiKomuto, authApiKomuto } from './api'

export const listBank = () => {
  let axios = publicApiKomuto()
  return axios.get('banks')
}

export const getBank = ({ id }) => {
  let axios = publicApiKomuto()
  return axios.get('banks/' + id)
}

export const addBankAccount = (action) => {
  const axios = authApiKomuto()
  return axios.post('accounts/banks', action)
}

export const getBankAccounts = ({ id = '' } = {}) => {
  const axios = authApiKomuto()
  return axios.get(`accounts/banks/${id}`)
}

export const updateBankAccount = ({ id, ...data }) => {
  const axios = authApiKomuto()
  return axios.put(`accounts/banks/${id}`, data)
}

export const deleteBankAccount = ({ id, ...code }) => {
  const axios = authApiKomuto()
  return axios.delete(`accounts/banks/${id}`, {}, { data: code })
}

export const getKomutoBankAccounts = () => {
  const axios = authApiKomuto()
  return axios.get('banks/komuto')
}
