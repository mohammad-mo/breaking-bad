import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// Components
import NavBar from './Components/NavBar'
import CharacterList from './Components/CharacterList'
import QuoteList from './Components/QuoteList'
import EpisodeList from './Components/EpisodeList'
import DeathList from './Components/DeathList'
import axios from 'axios'

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

  useEffect(() =>
  {
    const fetchItems = async () =>
    {
      const results = await axios.get(`https://breakingbadapi.com/api/characters`)
      const quotes = await axios.get(`https://breakingbadapi.com/api/quotes`)
      const episodes = await axios.get(`https://breakingbadapi.com/api/episodes`)
      const deaths = await axios.get(`https://breakingbadapi.com/api/deaths`)
      setCharacterItems(results.data)
      setQuoteItems(quotes.data)
      setEpisodeItems(episodes.data)
      setDeathItems(deaths.data)
    }
    fetchItems()
  }, [])

  return (
      <div className="App">
        <NavBar />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path='/' element=
            {
                <CharacterList items={characterItems} />
            }
            />
            <Route path='/quotes' element={<QuoteList items={quoteItems} />} />
            <Route path='/episodes' element={<EpisodeList items={episodeItems} />} />
            <Route path='/deaths' element={<DeathList items={deathItems} />} />
          </Routes>
        </AnimatePresence>
      </div>
  );
}

export default App
