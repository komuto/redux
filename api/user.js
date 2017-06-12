import { base_url } from '../config'
import { authApi, publicApi } from './api'


function register (action) {
  let axios = publicApi()
  return axios.post('users', {
    ...action
  })
}

function login (action) {
  let axios = authApi()
  return axios.post('users/login', {
    ...action
  })
}

export {
  login,
  register
}
