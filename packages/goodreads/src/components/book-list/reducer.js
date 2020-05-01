import {
  FETCH_META_STARTED,
  FETCH_META_SUCCEEDED,
  FETCH_META_FAILED,
  FETCH_IMAGES_STARTED,
  FETCH_IMAGES_SUCCEEDED,
  FETCH_IMAGES_FAILED,
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
    case FETCH_IMAGES_STARTED: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case FETCH_IMAGES_SUCCEEDED: {
      return {
        ...state,
        images: action.payload.images,
        isLoading: false,
      }
    }
    case FETCH_IMAGES_FAILED: {
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
