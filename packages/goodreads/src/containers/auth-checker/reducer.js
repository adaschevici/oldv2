import {
  CHECK_AUTH_STARTED,
  CHECK_AUTH_SUCCEEDED,
  CHECK_AUTH_FAILED,
} from './actions'

const initialState = {
  isLoading: false,
  username: null,
  error: null,
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case CHECK_AUTH_STARTED: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case CHECK_AUTH_SUCCEEDED: {
      return {
        ...state,
        username: action.payload.username,
        isLoading: false,
      }
    }
    case CHECK_AUTH_FAILED: {
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
