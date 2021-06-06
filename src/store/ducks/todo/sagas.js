import { takeEvery, put } from 'redux-saga/effects'
import { ADD_TODO_LIST_REQUEST, REQUEST_LOGIN } from './types'
import { addTask, requestTodoFail } from './actions'
import history from '../../../history'

export function* fetchUser(action) {
  try {
    const { id, userName, task } = action.payload
    const addTaskAction = addTask(id, userName, task)
    yield put(addTaskAction)
  } catch (e) {
    yield put(requestTodoFail())
  }
}

export function* userLogin() {
  try {
    history.push('/home')
  } catch (e) {
    console.log('login Fail')
  }
}

export function* watchRequestTodo() {
  yield takeEvery(ADD_TODO_LIST_REQUEST, fetchUser)
  yield takeEvery(REQUEST_LOGIN, userLogin)
}
