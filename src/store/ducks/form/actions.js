import { ADD_FORM_DATA, INIT_FORM } from './types'

export const initForm = (payload) => ({ type: INIT_FORM, payload })

export const addFormData = (payload) => ({
  type: ADD_FORM_DATA,
  payload,
})
