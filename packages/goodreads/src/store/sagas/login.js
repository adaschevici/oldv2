import { call, put } from 'redux-saga/effects'
import * as api from '../api'
import { LOGIN_SUCCEEDED, LOGIN_FAILED } from '../../components/login/actions'
import {
  REGISTRATION_SUCCEEDED,
  REGISTRATION_FAILED,
} from '../../components/register/actions'

export const watchLogin = function* watchPerformLogin({ payload }) {
  try {
    yield call(api.authenticateUser, payload)
    yield put({
      type: LOGIN_SUCCEEDED,
    })
  } catch (e) {
    yield put({
      type: LOGIN_FAILED,
    })
  }
}

export const watchRegistration = function* watchPerformRegistration({
  payload,
}) {
  try {
    yield call(api.createUser, payload)
    yield put({
      type: REGISTRATION_SUCCEEDED,
    })
  } catch (e) {
    console.log(e)
    yield put({
      type: REGISTRATION_FAILED,
    })
  }
}
