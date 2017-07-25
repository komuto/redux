import * as actions from '../actions/product'
import { buildReducer, initState, buildType } from '../config'

const initDetailProduct = {
  detail: {},
  ...initState()
}

const initNewDiscussion = {
  discussion: {},
  ...initState()
}

const initComment = {
  comments: [],
  ...initState()
}

const initNewComment = {
  comment: {},
  ...initState()
}

const initProduct = {
  products: [],
  ...initState()
}

const initDiscussion = {
  discussions: [],
  ...initState()
}

const initAddWishlist = {
  wishlist: [],
  ...initState()
}

const initReport = {
  report: {},
  ...initState()
}

const initPromo = {
  promo: {},
  ...initState()
}

function getProduct (state = initDetailProduct, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_PRODUCT:
      return buildReducer(state, action, type, 'detail')
    case actions.GET_PRODUCT_RESET:
      return initDetailProduct
    default:
      return state
  }
}

function productByCategory (state = initProduct, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.LIST_PRODUCT_BY_CATEGORY:
      return buildReducer(state, action, type, 'products')
    default:
      return state
  }
}

function productBySearch (state = initProduct, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.LIST_PRODUCT_BY_SEARCH:
      return buildReducer(state, action, type, 'products')
    default:
      return state
  }
}

function addToWishlist (state = initAddWishlist, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.ADD_TO_WISHLIST:
      return buildReducer(state, action, type, 'wishlist')
    case actions.ADD_TO_WISHLIST_RESET:
      return initAddWishlist
    default:
      return state
  }
}

function addToWishlistHome (state = initAddWishlist, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.ADD_TO_WISHLIST_HOME:
      return buildReducer(state, action, type, 'wishlist')
    case actions.ADD_TO_WISHLIST_HOME_RESET:
      return initAddWishlist
    default:
      return state
  }
}

function getDiscussion (state = initDiscussion, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_DISCUSSION:
      return buildReducer(state, action, type, 'discussions')
    default:
      return state
  }
}

function newDiscussion (state = initNewDiscussion, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.NEW_DISCUSSION:
      return buildReducer(state, action, type, 'discussion')
    case actions.NEW_DISCUSSION_RESET:
      return initNewDiscussion
    default:
      return state
  }
}

function getComment (state = initComment, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_COMMENT:
      return buildReducer(state, action, type, 'comments')
    default:
      return state
  }
}

function newComment (state = initNewComment, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.NEW_COMMENT:
      return buildReducer(state, action, type, 'comment')
    case actions.NEW_COMMENT_RESET:
      return initNewComment
    default:
      return state
  }
}

function reportProduct (state = initReport, action) {
  const type = buildType(action.type)
  switch (type) {
    case actions.REPORT_PRODUCT:
      return buildReducer(state, action, type, 'report')
    default:
      return state
  }
}

export const getPromo = (state = initPromo, action) => {
  const type = buildType(action.type)
  switch (type) {
    case actions.GET_PROMO:
      return buildReducer(state, action, type, 'promo')
    default:
      return state
  }
}

export {
    getProduct,
    productByCategory,
    productBySearch,
    addToWishlist,
    addToWishlistHome,
    getDiscussion,
    newDiscussion,
    getComment,
    newComment,
    reportProduct
}
