import { authApi, publicApi, authApiKomuto, publicApiKomuto } from './api'

// function product () {
//   let axios = publicApi()
//   return axios.get()
// }


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
  categoryList,
  subCategory
}
