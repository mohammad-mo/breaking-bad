import axios from 'axios'

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED'

const fetchdataRequest = () => {
  return { type: FETCH_DATA_REQUEST }
}

const fetchdataSuccess = (data) => {
  return { type: FETCH_DATA_SUCCESS, payload: data }
}

const fetchdataFailed = (error) => {
  return { type: FETCH_DATA_FAILED, payload: error }
}

const api = axios.create({
  baseURL: 'https://breakingbadapi.com/api/',
})

const getCharacters = async () => {
  const characters = await api.get('characters')
  return characters.data
}

const getQuotes = async () => {
  const quotes = await api.get('quotes')
  return quotes.data
}

const getEpisodes = async () => {
  const episodes = await api.get('episodes')
  return episodes.data
}

const getDeaths = async () => {
  const deaths = await api.get('deaths')
  return deaths.data
}

export {
  fetchdataRequest,
  fetchdataSuccess,
  fetchdataFailed,
  getCharacters,
  getQuotes,
  getEpisodes,
  getDeaths,
}
