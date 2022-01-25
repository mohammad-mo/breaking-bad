import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// Components
import NavBar from './Components/NavBar'
import CharacterList from './Components/CharacterList'
import QuoteList from './Components/QuoteList'
import EpisodeList from './Components/EpisodeList'
import DeathList from './Components/DeathList'
import Loading from './Components/loading'
import CustomCursor from './Components/CutomCursor'
import axios from './Components/Api'

// Style
import './Styles/app.scss'

// Animation
import { AnimatePresence } from 'framer-motion'

const App = () => 
{

  const location = useLocation()

  const [characterItems, setCharacterItems] = useState([])
  const [quoteItems, setQuoteItems] = useState([])
  const [episodeItems, setEpisodeItems] = useState([])
  const [deathItems, setDeathItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() =>
  {
    const fetchItems = async () =>
    {
      const results = await axios.get(`characters`)
      const quotes = await axios.get(`quotes`)
      const episodes = await axios.get(`episodes`)
      const deaths = await axios.get(`deaths`)
      setCharacterItems(results.data)
      setQuoteItems(quotes.data)
      setEpisodeItems(episodes.data)
      setDeathItems(deaths.data)
      setLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <div className="App">
      <CustomCursor />
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            element={
              loading ? <Loading /> : <CharacterList items={characterItems} />
            }
          />
          <Route
            path="/quotes"
            element={loading ? <Loading /> : <QuoteList items={quoteItems} />}
          />
          <Route
            path="/episodes"
            element={
              loading ? <Loading /> : <EpisodeList items={episodeItems} />
            }
          />
          <Route
            path="/deaths"
            element={loading ? <Loading /> : <DeathList items={deathItems} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
