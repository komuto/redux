import * as homeActions from '../actions/home'

const initCategory = {
  categories: [],
  message: '',
  status: '',
  isLoading: false,
  isError: false,
  isFound: false
}

function categoryList (state=initCategory, action) {
  switch (action.type) {
    case homeActions.HOME_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case homeActions.HOME_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.data,
        message: action.message,
        status: action.code,
        isLoading: false,
        isFound: true
      }
    case homeActions.HOME_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.message,
        status: action.code,
        isLoading: false,
        isError: true
      }
    default:
      return state
  }
}

function subCategory (state=initCategory, action) {
  switch (action.type) {
    case homeActions.RESET_STATUS_SUBCATEGORY:
      return {
        ...state,
        categories: [],
        message: '',
        status: 0
      }
    case homeActions.HOME_SUBCATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case homeActions.HOME_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.data,
        message: action.message,
        status: action.code,
        isLoading: false,
        isFound: true
      }
    case homeActions.HOME_SUBCATEGORY_FAILURE:
      return {
        ...state,
        message: action.message,
        status: action.code,
        isLoading: false,
        isError: true
      }
    default:
      return state
  }
}

export {
  categoryList,
  subCategory
}
