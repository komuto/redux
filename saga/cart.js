import { put } from 'redux-saga/effects'
import * as actions from '../actions/cart'
import * as apis from '../api/cart'
import { errorHandling, typeSucc, typeFail } from '../config'

export const addToCart = function* (action) {
  try {
    const { data } = yield apis.addToCart(action)
    yield put({ type: typeSucc(actions.ADD_TO_CART), ...data })
  } catch (e) {
    yield errorHandling(typeFail(actions.ADD_TO_CART), e)
  }
}

export const getCart = function* () {
  try {
    const { data } = yield apis.getCart()
    console.log(data)
    yield put({ type: typeSucc(actions.GET_CART), ...data })
  } catch (e) {
    console.log(e)
    yield errorHandling(typeFail(actions.GET_CART), e)
  }
}

export const countCart = function* () {
  try {
    const { data } = yield apis.countCart()
    data.data = data.data.count
    yield put({ type: typeSucc(actions.COUNT_CART), ...data })
  } catch (e) {
    yield errorHandling(typeFail(actions.COUNT_CART), e)
  }
}

export const getPromo = function* (action) {
  try {
    const { data } = yield apis.getPromo(action)
    yield put({ type: typeSucc(actions.GET_PROMO), ...data })
  } catch (e) {
    yield errorHandling(typeFail(actions.GET_PROMO), e)
  }
}
