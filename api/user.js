import { serviceUrl } from '../config'
import { authApi, publicApi } from './api'
import { storage } from '../localStorage'


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

// function loginAuth () {
//   return new Promise (function (resolve, reject) {
//     storage.getItem('authenticated', function (err, value) {
//       if (!err && value !== undefined) {
//         return resolve(value)
//       } else {
//         return reject(err)
//       }
//     })
//   })
// }

function loginSocial (action) {
  let axios = publicApi()
  return axios.post('users/social-login', {
    ...action
  })
}

function forgetPassword (action) {
  let axios = publicApi()
  return axios.post('passwords/forgot', {
    ...action
  })
}

export {
  login,
  // loginAuth,
  loginSocial,
  register,
  forgetPassword
}
