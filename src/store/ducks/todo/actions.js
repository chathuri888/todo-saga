import {
  ADD_TASK,
  ADD_TODO_LIST_REQUEST,
  TODO_FETCH_FAILED,
  REQUEST_LOGIN,
} from './types'

export const addTask = (id, userData, task) => {
  return {
    type: ADD_TASK,
    payload: {
      id,
      userData,
      task,
    },
  }
}

export const requestAddTodoList = (userName, task, id) => ({
  type: ADD_TODO_LIST_REQUEST,
  payload: {
    id,
    userName,
    task,
  },
})

export const requestTodoFail = () => ({
  type: TODO_FETCH_FAILED,
})

export const requestUserLogin = (userName, passwordValue) => ({
  type: REQUEST_LOGIN,
  payload: {
    userName,
    passwordValue,
  },
})
