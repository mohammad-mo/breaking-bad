import { call, all, put, takeEvery } from 'redux-saga/effects'
import {
  FETCH_DATA_REQUEST,
  fetchdataSuccess,
  fetchdataFailed,
  getCharacters,
  getQuotes,
  getEpisodes,
  getDeaths,
} from './actions'

function* workGetUsersFetch() {
  try {
    const [characters, quotes, episodes, deaths] = yield all([
      call(getCharacters),
      call(getQuotes),
      call(getEpisodes),
      call(getDeaths),
    ])
    const data = {
      characters,
      quotes,
      episodes,
      deaths,
    }
    yield put(fetchdataSuccess(data))
  } catch (error) {
    yield put(fetchdataFailed(error.message))
  }
}

function* mySaga() {
  yield takeEvery(FETCH_DATA_REQUEST, workGetUsersFetch)
}

export default mySaga
