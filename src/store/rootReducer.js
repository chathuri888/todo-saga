import { combineReducers } from 'redux'
import { Task } from './ducks/todo'
import { Form } from './ducks/form'

const rootReducer = combineReducers({
  Task,
  Form,
})

export default rootReducer
