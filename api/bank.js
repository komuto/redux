import { publicApiKomuto, authApiKomuto } from './api'

function listBank (action) {
  let axios = publicApiKomuto()
  return axios.get('banks', {
    ...action
  })
  .then(function (data) {
    return data
  })
  .catch(function (err) {
    throw (err)
  })
}

function getBank (action) {
  let axios = publicApiKomuto()
  return axios.get('banks/' + action.id, {
    ...action
  })
  .then(function (data) {
    return data
  })
  .catch(function (err) {
    throw (err)
  })
}

export const addBankAccount = async (action) => {
  const axios = authApiKomuto()
  return await axios.post('accounts/banks', { ...action })
    .catch((err) => { throw err })
}

export const getBankAccounts = async (id = '') => {
  const axios = authApiKomuto()
  return await axios.get(`accounts/banks/${id}`)
    .catch((err) => { throw err })
}

export const updateBankAccount = async ({ id, ...data }) => {
  const axios = authApiKomuto()
  return await axios.put(`accounts/banks/${id}`, data).catch((err) => { throw err })
}

export const deleteBankAccount = async ({ id, ...code }) => {
  const axios = authApiKomuto()
  return await axios.delete(`accounts/banks/${id}`, { data: code }).catch((err) => { throw err })
}

export {
  listBank,
  getBank
}
