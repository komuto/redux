import { authApi, publicApi, authApiKomuto, publicApiKomuto } from './api'

function product (action) {
  let axios = publicApi()
  return axios.get('products', {
    ...action
  })
}


function categoryList (action) {
  let axios = publicApi()
  return axios.get('categories', {
    ...action
  })
}

function subCategory (action) {
  let axios = publicApi()
  return axios.get('categories/'+ action.id +'/sub-categories', {
    ...action
  })
}

export {
  product,
  categoryList,
  subCategory
}
