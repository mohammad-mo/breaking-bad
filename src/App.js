import { Route, Routes, useLocation } from 'react-router-dom'

import { useEffect, useContext } from 'react'

// Context
import BreakingBadContext from './Context/Context'
import { getData } from './Context/Actions'

// Components
import NavBar from './Components/NavBar'
import CharacterList from './Components/CharacterList'
import QuoteList from './Components/QuoteList'
import EpisodeList from './Components/EpisodeList'
import DeathList from './Components/DeathList'
import NotFound from './Components/NotFound'
import CustomCursor from './Components/CutomCursor'
import Loading from './Components/loading'
import ErrorBoundary from './Components/ErrorBoundary'

// Style
import './Styles/app.scss'

// Animation
import { AnimatePresence } from 'framer-motion'

const App = () => {
  const { characters, quotes, episodes, deaths, dispatch, loading } =
    useContext(BreakingBadContext)

  useEffect(() => {
    let isComponentMounted = true
    dispatch({ type: 'SET_LOADING' })
    const getDataFromApi = async () => {
      const data = await getData()
      if (isComponentMounted) {
        dispatch({ type: 'GET_DATA', payload: data })
      }
    }
    getDataFromApi()

    return () => {
      isComponentMounted = false
    }
  }, [dispatch])

  const location = useLocation()

  if (loading) {
    return (
      <>
        <NavBar />
        <Loading />
      </>
    )
  } else {
    return (
      <>
        <ErrorBoundary>
          <CustomCursor />
          <NavBar />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                element={<CharacterList characters={characters} />}
              />
              <Route path='/quotes' element={<QuoteList quotes={quotes} />} />
              <Route
                path='/episodes'
                element={<EpisodeList episodes={episodes} />}
              />
              <Route path='/deaths' element={<DeathList deaths={deaths} />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </>
    )
  }
}

export default App
