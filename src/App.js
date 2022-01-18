import React, { useState, useEffect } from 'react'

import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import CharacterList from './Components/CharacterList'
import QuoteList from './Components/QuoteList'
import EpisodeList from './Components/EpisodeList'
import DeathList from './Components/DeathList'
import Spinner from './Components/Spinner'
import axios from 'axios'

import './Styles/app.scss'

const App = () => 
{
  const [characterItems, setCharacterItems] = useState([])
  const [quoteItems, setQuoteItems] = useState([])
  const [episodeItems, setEpisodeItems] = useState([])
  const [deathItems, setDeathItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() =>
  {
    const fetchItems = async () =>
    {
      const results = await axios.get(`https://breakingbadapi.com/api/characters`)
      const quotes = await axios.get(`https://breakingbadapi.com/api/quotes`)
      const episodes = await axios.get(`https://breakingbadapi.com/api/episodes`)
      const deaths = await axios.get(`https://breakingbadapi.com/api/deaths`)
      console.log(deaths)
      setCharacterItems(results.data)
      setQuoteItems(quotes.data)
      setEpisodeItems(episodes.data)
      setDeathItems(deaths.data)
      setLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className="App">
      <NavBar />
      {/* <SearchBar setQuery={setQuery} /> */}
      {loading ? <Spinner /> : <CharacterList items={characterItems} />}
      {loading ? <Spinner /> : <QuoteList items={quoteItems} />}
      {loading ? <Spinner /> : <EpisodeList items={episodeItems} />}
      {loading ? <Spinner /> : <DeathList items={deathItems} />}
    </div>
  );
}

export default App
