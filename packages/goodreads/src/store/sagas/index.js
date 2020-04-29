import { put, takeLatest } from 'redux-saga/effects'
import { FETCH_META_STARTED } from '../../components/book-list/actions'
import { LOGIN_STARTED } from '../../components/login/actions'
import { watchBookMeta } from './books'

export default function* rootSaga() {
  yield takeLatest(FETCH_META_STARTED, watchBookMeta)
}
