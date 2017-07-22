import * as homeActions from '../actions/home'
import { initState, reducerCreator } from '../config'

const initCategory = {
  categories: [],
  ...initState()
}

const initSearch = {
  products: [],
  ...initState()
}

const initFilter = {
  products: [],
  ...initState()
}

const initAllCategory = {
  allCategory: [],
  ...initState()
}

const initProduct = {
  products: [],
  ...initState()
}

export const product = (state = initProduct, action) => reducerCreator(state, action, homeActions.productsAction, 'products')
export const searchProduct = (state = initSearch, action) => reducerCreator(state, action, homeActions.searchAction, 'products')
export const filterProduct = (state = initFilter, action) => reducerCreator(state, action, homeActions.filterAction, 'products')
export const allCategory = (state = initAllCategory, action) => reducerCreator(state, action, homeActions.allCategoryAction, 'allCategory')
export const categoryList = (state = initCategory, action) => reducerCreator(state, action, homeActions.categoryListAction, 'categories')
export const subCategory = (state = initCategory, action) => reducerCreator(state, action, homeActions.subCategoryAction, 'categories')
