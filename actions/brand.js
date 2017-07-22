import { actionType, buildAction } from '../config'

export const getBrandAction = actionType('GET_BRAND')
export const getBrandByCategoryAction = actionType('BRAND_BYCATEGORY')

export const getBrand = () => buildAction(getBrandAction.request)
export const getBrandByCategory = params => buildAction(getBrandByCategoryAction.request, params)
