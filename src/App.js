import { Route, Routes, useLocation } from 'react-router-dom'
import { ContextProvider } from './Context/Context'

// Components
import NavBar from './Components/NavBar'
import CharacterList from './Components/CharacterList'
import QuoteList from './Components/QuoteList'
import EpisodeList from './Components/EpisodeList'
import DeathList from './Components/DeathList'
import CustomCursor from './Components/CutomCursor'

// Style
import './Styles/app.scss'

// Animation
import { AnimatePresence } from 'framer-motion'

const App = () => 
{

  const location = useLocation()

  return (
    <ContextProvider>
      <CustomCursor />
      <NavBar />
      <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route
              exact
              path="/"
              element={<CharacterList />}
            />
            <Route path="/quotes" element={<QuoteList />} />
            <Route
              path="/episodes"
              element={<EpisodeList />}
            />
            <Route path="/deaths" element={<DeathList />} />
          </Routes>
        )
      </AnimatePresence>
    </ContextProvider>
  )
}

export default App
