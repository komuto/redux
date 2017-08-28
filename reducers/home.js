import * as actions from '../actions/home'
import { buildReducer, buildType, buildInitState } from '../config'

export const product = (state = buildInitState({ products: [] }, true), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.HOME_PRODUCT:
      return buildReducer(state, action, type, 'products', true)
    default:
      return state
  }
}

export const searchProduct = (state = buildInitState({ products: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.SEARCH_PRODUCT:
      return buildReducer(state, action, type, 'products')
    default:
      return state
  }
}

export const filterProduct = (state = buildInitState({ products: [] }, true), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.FILTER_PRODUCT:
      return buildReducer(state, action, type, 'products', true)
    default:
      return state
  }
}

export const allCategory = (state = buildInitState({ allCategory: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.ALL_CATEGORY:
      return buildReducer(state, action, type, 'allCategory')
    default:
      return state
  }
}

export const categoryList = (state = buildInitState({ categories: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_CATEGORIES_1:
      return buildReducer(state, action, type, 'categories')
    default:
      return state
  }
}

export const subCategory = (state = buildInitState({ categories: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.STATUS_SUBCATEGORY_RESET:
      return buildInitState({ categories: [] })
    case actions.GET_CATEGORIES_2:
      return buildReducer(state, action, type, 'categories')
    default:
      return state
  }
}

export const subCategory2 = (state = buildInitState({ categories: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_CATEGORIES_3:
      return buildReducer(state, action, type, 'categories')
    default:
      return state
  }
}

export const subCategory3 = (state = buildInitState({ categories: [] }), action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_CATEGORIES_4:
      return buildReducer(state, action, type, 'categories')
    default:
      return state
  }
}
