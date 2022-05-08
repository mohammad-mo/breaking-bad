const initialState = {
  data: {},
  error: '',
  loading: false,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: payload,
        loading: false,
      }
    case 'FETCH_DATA_FAILED':
      return {
        ...state,
        data: {},
        error: payload,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
