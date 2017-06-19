import { put } from 'redux-saga/effects'
import * as homeActions from '../actions/home'
import * as homeApi from '../api/home'

function* product (action) {
  try {
    const {data} = yield homeApi.product(action)
    yield put({ type: homeActions.HOME_PRODUCT_SUCCESS, ...data })
  } catch (e) {
    console.log(e)
    yield put({ type: homeActions.HOME_PRODUCT_FAILURE })
  }
}

function* categoryList (action) {
  try {
    const {data} = yield homeApi.categoryList(action)
    yield put({ type: homeActions.HOME_CATEGORY_SUCCESS, ...data })
  } catch (e) {
    yield put({ type: homeActions.HOME_CATEGORY_FAILURE })
  }
}

function* subCategory (action) {
  try {
    const {data} = yield homeApi.subCategory(action)
    yield put({ type: homeActions.HOME_SUBCATEGORY_SUCCESS, ...data })
  } catch (e) {
    yield put({ type: homeActions.HOME_SUBCATEGORY_FAILURE })
  }
}

export {
  product,
  categoryList,
  subCategory
}
