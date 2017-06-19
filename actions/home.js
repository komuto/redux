export const HOME_PRODUCT_REQUEST = 'HOME_PRODUCT_REQUEST'
export const HOME_PRODUCT_SUCCESS = 'HOME_PRODUCT_SUCCESS'
export const HOME_PRODUCT_FAILURE = 'HOME_PRODUCT_FAILURE'

export const HOME_CATEGORY_REQUEST = 'HOME_CATEGORY_REQUEST'
export const HOME_CATEGORY_SUCCESS = 'HOME_CATEGORY_SUCCESS'
export const HOME_CATEGORY_FAILURE = 'HOME_CATEGORY_FAILURE'

export const HOME_SUBCATEGORY_REQUEST = 'HOME_SUBCATEGORY_REQUEST'
export const HOME_SUBCATEGORY_SUCCESS = 'HOME_SUBCATEGORY_SUCCESS'
export const HOME_SUBCATEGORY_FAILURE = 'HOME_SUBCATEGORY_FAILURE'

export const RESET_STATUS_SUBCATEGORY = 'RESET_STATUS_SUBCATEGORY'

function products () {
  return {
    type: HOME_PRODUCT_REQUEST
  }
}

function categoryList () {
  return {
    type: HOME_CATEGORY_REQUEST
  }
}

function subCategory (params) {
  return {
    type: HOME_SUBCATEGORY_REQUEST,
    ...params
  }
}

function resetStatus () {
  return {
    type: RESET_STATUS_SUBCATEGORY
  }
}

export {
  products,
  categoryList,
  subCategory,
  resetStatus
}
