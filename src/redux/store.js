import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../redux/features/weather/weatherSlice'
import logger from 'redux-logger'

const store = configureStore({
  reducer: {
    weather: weatherReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger)
})

export default store
