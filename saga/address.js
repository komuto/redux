import { put } from 'redux-saga/effects'
import * as actions from '../actions/address'
import * as apis from '../api/address'
import { errorHandling } from '../config'

export const addAddress = function * (action) {
  try {
    const {data} = yield apis.addAddress(action)
    yield put({ type: actions.addAddressAction.success, ...data })
  } catch (e) {
    yield errorHandling(actions.addAddressAction.failure, e)
  }
}

export const updateAddress = function * (action) {
  try {
    const {data} = yield apis.updateAddress(action)
    yield put({ type: actions.updateAddressAction.success, ...data })
  } catch (e) {
    yield errorHandling(actions.updateAddressAction.failure, e)
  }
}

export const deleteAddress = function * (action) {
  try {
    const {data} = yield apis.deleteAddress(action)
    yield put({ type: actions.deleteAddressAction.request, ...data })
  } catch (e) {
    yield errorHandling(actions.deleteAddressAction.success, e)
  }
}

export const getAddressDetail = function * (action) {
  try {
    const {data} = yield apis.getAddressDetail(action)
    yield put({ type: actions.addressDetailAction.success, ...data })
  } catch (e) {
    yield errorHandling(actions.addressDetailAction.failure, e)
  }
}

export const getListAddress = function * (action) {
  try {
    const {data} = yield apis.getListAddress(action)
    yield put({ type: actions.listAddressAction.success, ...data })
  } catch (e) {
    yield errorHandling(actions.listAddressAction.failure, e)
  }
}

export const getPrimaryAddress = function * (action) {
  try {
    const {data} = yield apis.getPrimaryAddress(action)
    yield put({ type: actions.primaryAddressAction.success, ...data })
  } catch (e) {
    console.log(e)
    yield errorHandling(actions.primaryAddressAction.failure, e)
  }
}
