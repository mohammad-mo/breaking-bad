const Reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        characters: action.payload.characters,
        quotes: action.payload.quotes,
        episodes: action.payload.episodes,
        deaths: action.payload.deaths,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default Reducer
