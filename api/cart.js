import { authApiKomuto } from './api'

export const addToCart = (action) => {
  let axios = authApiKomuto()
  return axios.post('buckets', { ...action })
    .catch((err) => { throw (err) })
}
