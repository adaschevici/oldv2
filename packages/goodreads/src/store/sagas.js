import { call, put, takeLatest } from 'redux-saga/effects'
import {
  FETCH_META_STARTED,
  FETCH_META_SUCCEEDED,
  FETCH_META_FAILED,
} from '../components/book-list/actions'
import * as api from './api'

export default function* rootSaga() {
  yield takeLatest(FETCH_META_STARTED, watchFetchMeta)
}

function* watchFetchMeta() {
  try {
    const { data } = yield call(api.fetchMeta)
    yield put({
      type: FETCH_META_SUCCEEDED,
      payload: { meta: data },
    })
  } catch (e) {
    yield put({
      type: FETCH_META_FAILED,
      payload: { error: e.message },
    })
  }
}
