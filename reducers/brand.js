import * as actions from '../actions/brand'
import { initState, reducerCreator } from '../config'

const initBrand = {
  brands: [],
  ...initState()
}

export const brand = (state = initBrand, action) => reducerCreator(state, action, actions.getBrandAction, 'brands')
export const brandByCategory = (state = initBrand, action) => reducerCreator(state, action, actions.getBrandByCategoryAction, 'brands')
