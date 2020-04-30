import { put, takeLatest } from 'redux-saga/effects'
import { FETCH_META_STARTED } from '../../components/book-list/actions'
import { FETCH_RATING_STARTED } from '../../components/book-list/actions'
import { FETCH_IMAGES_STARTED } from '../../components/book-list/actions'
import { LOGIN_STARTED } from '../../components/login/actions'
import { REGISTRATION_STARTED } from '../../components/register/actions'
import { watchBookMeta } from './books'
import { watchBookImages } from './books'
import { watchBookRatings } from './books'
import { watchLogin, watchRegistration } from './login'

export default function* rootSaga() {
  yield takeLatest(FETCH_META_STARTED, watchBookMeta)
  yield takeLatest(FETCH_RATING_STARTED, watchBookRatings)
  yield takeLatest(FETCH_IMAGES_STARTED, watchBookImages)
  yield takeLatest(LOGIN_STARTED, watchLogin)
  yield takeLatest(REGISTRATION_STARTED, watchRegistration)
}
