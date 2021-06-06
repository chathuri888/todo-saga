import { all } from 'redux-saga/effects'
import { watchRequestTodo } from './ducks/todo'

export default function* rootSaga() {
  yield all([watchRequestTodo()])
}
