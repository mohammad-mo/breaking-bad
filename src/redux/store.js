import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import reducer from './reducer'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(mySaga)

export default store
