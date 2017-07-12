import axios from 'axios'
import { serviceUrl, apiKomuto } from '../config'
import {token} from '../store'
import {localStorage} from '../localStorage'

export function authApi () {
  return axios.create({
    baseURL: serviceUrl + '/',
    headers: {'Authorization': token()}
  })
}

export function publicApi () {
  return axios.create({
    baseURL: serviceUrl + '/'
  })
}

export function publicApiKomuto () {
  return axios.create({
    baseURL: apiKomuto + '/',
    timeout: 10000
  })
}

export function uploadApi () {
  const api = axios.create({
    baseURL: apiKomuto + '/',
    headers: {
      'Accept': 'application/json',
      'enctype': 'multipart/form-data'
    }
  })
  api.interceptors.request.use(config => {
    try {
      const token = localStorage.get('token')
      if (token !== null) {
        config.headers['Authorization'] = 'JWT ' + token
      }
      return config
    } catch (err) {
      config.log('Error with message: ', err)
    }
  })
  return api
}

export function authApiKomuto () {
  const api = axios.create({
    baseURL: apiKomuto + '/',
    timeout: 10000
  })
  api.interceptors.request.use(config => {
    try {
      const token = localStorage.get('token')
      if (token !== null) {
        config.headers['Authorization'] = 'JWT ' + token
      }
      return config
    } catch (err) {
      config.log('Error with message: ', err)
    }
  })
  return api
}
