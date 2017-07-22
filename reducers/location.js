import * as locationActions from '../actions/location'
import { initState, reducerCreator } from '../config'

const initProvince = {
  provinces: [],
  ...initState()
}

const initDistrict = {
  districts: [],
  ...initState()
}

const initSubDistrict = {
  subdistricts: [],
  ...initState()
}

const initVillage = {
  villages: [],
  ...initState()
}

export const province = (state = initProvince, action) => reducerCreator(state, action, locationActions.getProvinceAction, 'provinces')
export const district = (state = initDistrict, action) => reducerCreator(state, action, locationActions.getDistrictAction, 'districts')
export const subdistrict = (state = initSubDistrict, action) => reducerCreator(state, action, locationActions.getSubDistrictAction, 'subdistricts')
export const village = (state = initVillage, action) => reducerCreator(state, action, locationActions.getVillageAction, 'villages')
