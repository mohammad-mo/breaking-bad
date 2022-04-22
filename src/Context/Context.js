import { createContext, useReducer } from 'react'
import Reducer from './Reducer'

const BreakingBadContext = createContext()

export const ContextProvider = ({ children }) => {
  const initialState = {
    characters: [],
    quotes: [],
    episodes: [],
    deaths: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <BreakingBadContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </BreakingBadContext.Provider>
  )
}

export default BreakingBadContext
