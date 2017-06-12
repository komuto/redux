import axios from 'axios';
import { base_url } from '../config'
import {token} from '../store'

export function authApi() {
  return axios.create({
    baseURL: base_url + '/',
    //timeout: 2000,
    headers: {'Authorization': token()}
  })
}

export function publicApi() {
  return axios.create({
    baseURL: base_url + '/'
    //timeout: 2000
  })
}
