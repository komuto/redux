import * as actions from '../actions/email'
import { initState, reducerCreator } from '../config'

const initCheckEmail = {
  ...initState()
}

export const checkEmail = (state = initCheckEmail, action) => reducerCreator(state, action, actions.checkEmailAction, 'email')
