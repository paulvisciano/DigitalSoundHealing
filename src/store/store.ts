import { configureStore } from '@reduxjs/toolkit';
import soundsMiddleware from 'redux-sounds';
import sheetMusicReducer from './sheetMusicSlice';
import { MetalSingingBowl } from 'instruments/MetalSingingBowl';

const soundsData : any =  {};

const registerInstumentSounds = () => {
  let singingBowl = new MetalSingingBowl();

  singingBowl.registerSounds(soundsData);
}

registerInstumentSounds();

export default configureStore({
  reducer: {
    sheetMusic: sheetMusicReducer
  },
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().prepend(soundsMiddleware(soundsData)),
});