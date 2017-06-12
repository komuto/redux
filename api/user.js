import { base_url } from '../config'
import { authApi, publicApi } from './api'


function login(action) {
  let axios = authApi()
  return axios.post('users/login', {
    ...action
  })
}

export {
  login
  // userRegister
}
