import * as productActions from '../actions/product'
import { initState, reducerCreator } from '../config'

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

export const getProduct = (state = initDetailProduct, action) => reducerCreator(state, action, productActions.getProductAction, 'detail')
export const productByCategory = (state = initProduct, action) => reducerCreator(state, action, productActions.listProductByCategoryAction, 'products')
export const productBySearch = (state = initProduct, action) => reducerCreator(state, action, productActions.listProductBySearchAction, 'products')
export const addToWishlist = (state = initAddWishlist, action) => reducerCreator(state, action, productActions.addToWishlistAction, 'wishlist')
export const addToWishlistHome = (state = initAddWishlist, action) => reducerCreator(state, action, productActions.addToWishlistHomeAction, 'wishlist')
export const getDiscussion = (state = initDiscussion, action) => reducerCreator(state, action, productActions.getDiscussionAction, 'discussions')
export const newDiscussion = (state = initNewDiscussion, action) => reducerCreator(state, action, productActions.newDiscussionAction, 'disscussion')
export const getComment = (state = initComment, action) => reducerCreator(state, action, productActions.getCommentAction, 'comments')
export const newComment = (state = initNewComment, action) => reducerCreator(state, action, productActions.newCommentAction, 'comment')
export const reportProduct = (state = initReport, action) => reducerCreator(state, action, productActions.reportProductAction, 'report')
