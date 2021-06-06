import React from 'react'
import { Input, Error } from './styles'
import { addFormData } from '../../store/ducks/form/actions'

import { useDispatch } from 'react-redux'

const TextInput = ({
  className,
  form,
  name,
  checked,
  value,
  onChange,
  error,
  placeholder,
  type,
  useEffect,
  ...props
}) => {
  const dispatch = useDispatch()

  const onChabgeText = (value) => {
    const error = value.length < 6 ? 'At least 6 characters' : null
    const setFormData = addFormData({
      form,
      data: {
        values: { [name]: value },
        errors: { [name]: error },
      },
    })
    dispatch(setFormData)
  }

  return (
    <>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChabgeText(e.target.value)}
        placeholder={placeholder}
      />
      <Error text={error} />
    </>
  )
}

export default TextInput
