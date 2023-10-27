import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './components/ChakraPlayerSlice';

export default configureStore({
  reducer: {
    player: playerReducer
  }
})