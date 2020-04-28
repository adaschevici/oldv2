import {
  FETCH_META_STARTED,
  FETCH_META_SUCCEEDED,
  FETCH_META_FAILED,
} from './actions'

const initialState = {
  meta: [],
  isLoading: false,
  error: null,
}

export default function books(state = initialState, action) {
  switch (action.type) {
    case FETCH_META_STARTED: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FETCH_META_SUCCEEDED: {
      return {
        ...state,
        meta: action.payload.meta,
        isLoading: false,
      }
    }
    case FETCH_META_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    }
    default: {
      return state
    }
  }
}
