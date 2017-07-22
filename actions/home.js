import { actionType, buildAction } from '../config'

export const productsAction = actionType('HOME_PRODUCT')
export const categoryListAction = actionType('HOME_CATEGORY')
export const allCategoryAction = actionType('ALL_CATEGORY')
export const searchAction = actionType('SEARCH_PRODUCT')
export const filterAction = actionType('FILTER_PRODUCT')
export const subCategoryAction = actionType('HOME_SUBCATEGORY')

export const products = params => buildAction(productsAction.request, params)
export const allCategory = buildAction(allCategoryAction.request)
export const categoryList = buildAction(categoryListAction.request)
export const search = params => buildAction(searchAction.request, params)
export const filter = params => buildAction(filterAction.request, params)
export const subCategory = params => buildAction(subCategoryAction.request, params)
