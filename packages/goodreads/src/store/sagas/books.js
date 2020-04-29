import { call, put } from 'redux-saga/effects'
import * as api from '../api'
import {
  FETCH_META_SUCCEEDED,
  FETCH_META_FAILED,
} from '../../components/book-list/actions'

export const watchBookMeta = function* watchFetchMeta() {
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
