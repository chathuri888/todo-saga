import { ADD_FORM_DATA, INIT_FORM } from './types'
import { LOGIN_FORM } from '../../../constants/FormNames'

export const INITIAL_STATE = {
  [LOGIN_FORM]: {
    fields: ['userName'],
    errors: {
      userName: '',
    },
    values: {
      userName: '',
    },
  },
}

const initForm = (state, { form, field, fieldValue, validations = [] }) => {
  const formData = state[form] || {}
  let fields = formData.fields || []
  const values = formData.values || {}
  const errors = formData.errors || {}
  if (!fields.includes(field)) fields = [...fields, field]
  const existingValidations = formData?.validations || {}

  return {
    ...state,
    [form]: {
      fields,
      formError: '',
      values: {
        ...values,
        [field]: fieldValue === undefined ? '' : fieldValue,
      },
      errors: { ...errors, [field]: [] },
      validations: { ...existingValidations, [field]: validations },
    },
  }
}

const addFormData = (state, { form, data }) => {
  const formData = state[form]
  const { values, errors } = formData

  return {
    ...state,
    [form]: {
      ...formData,
      values: { ...values, ...data.values },
      errors: { ...errors, ...data.errors },
      formUpdated: true,
    },
  }
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case INIT_FORM:
      return initForm(state, payload)
    case ADD_FORM_DATA:
      return addFormData(state, payload)
    default:
      return state
  }
}
