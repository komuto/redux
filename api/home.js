import { authApi, publicApi, authApiKomuto, publicApiKomuto } from './api'

function product (action) {
  let axios = publicApi()
  let param = ''
  let check = [
    {value: action.is_dropship, string: 'is_dropship'},
    {value: action.category_id, string: 'category_id'},
    {value: action.query, string: 'q'},
    {value: action.limit, string: 'limit'},
    {value: action.page, string: 'page'}
  ]

  let indeksCheck = []
  for (i=0; i<check.length; i++) {
    if (check[i].value !== undefined) {
      indeksCheck.push(i)
    }
  }

  if (indeksCheck.length !== 0) {
    param = '?'
  }

  for (i=0; i<indeksCheck.length; i++) {
    if (i !== indeksCheck.length - 1 && typeof check[indeksCheck[i]].value !== 'string') {
      param = param + check[indeksCheck[i]].string + '=' + check[indeksCheck[i]].value + '&'
    } else if (i !== indeksCheck.length - 1 && typeof check[indeksCheck[i]].value === 'string') {
      param = param + check[indeksCheck[i]].string + '=' + '\"' + check[indeksCheck[i]].value + '\"' + '&'
    } else if (i === indeksCheck.length - 1 && typeof check[indeksCheck[i]].value === 'string') {
      param = param + check[indeksCheck[i]].string + '=' + '\"' + check[indeksCheck[i]].value + '\"'
    } else {
      param = param + check[indeksCheck[i]].string + '=' + check[indeksCheck[i]].value
    }
  }
  console.log('ini nih paramnya: products' + param)
  return axios.get('products' + param, {
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
