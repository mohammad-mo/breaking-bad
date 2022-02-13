import { createContext, useReducer } from 'react'
import Reducer from './Reducer'

const Context = createContext()

export const ContextProvider = ({ children }) =>
{
    const initialState = {
        characters: [],
        quotes: [],
        episodes: [],
        deaths: [],
        loading: false
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    return <Context.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </Context.Provider>
}

export default Context