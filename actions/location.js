import { actionType, buildAction } from '../config'

export const getProvinceAction = actionType('GET_PROVINCE')
export const getDistrictAction = actionType('GET_DISTRICT')
export const getSubDistrictAction = actionType('GET_SUB_DISTRICT')
export const getVillageAction = actionType('GET_VILLAGE')

export const getProvince = buildAction(getProvinceAction.request)
export const getDistrict = params => buildAction(getDistrictAction.request, params)
export const getSubDistrict = params => buildAction(getSubDistrictAction.request, params)
export const getVillage = params => buildAction(getVillageAction.request, params)
