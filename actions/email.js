import { actionType, buildAction } from '../config'

export const checkEmailAction = actionType('CHECK_EMAILVALIDITY')

export const checkEmail = params => buildAction(checkEmailAction.request, params)
