import { configureStore } from '@reduxjs/toolkit'
import latlngSlice from '../reducer/latlngSlice'

const store = configureStore({
  reducer: {
    latlng: latlngSlice,
  },
})

export default store; 