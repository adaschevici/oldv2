import { takeLatest } from 'redux-saga/effects'
import { CHECK_AUTH_STARTED } from '../../containers/auth-checker/actions'
import { FETCH_BOOKS_STARTED } from '../../components/book-list/actions'
import { LOGIN_STARTED } from '../../components/login/actions'
import { REGISTRATION_STARTED } from '../../components/register/actions'
import { watchBooks } from './books'
import { watchLogin, watchRegistration, watchAuthStatus } from './login'

export default function* rootSaga() {
  yield takeLatest(LOGIN_STARTED, watchLogin)
  yield takeLatest(REGISTRATION_STARTED, watchRegistration)
  yield takeLatest(CHECK_AUTH_STARTED, watchAuthStatus)
  yield takeLatest(FETCH_BOOKS_STARTED, watchBooks)
}
