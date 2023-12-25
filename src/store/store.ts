import { configureStore } from '@reduxjs/toolkit';
import soundsMiddleware from 'redux-sounds';
import sheetMusicReducer from './sheetMusicSlice';
import { SingingBowl } from 'instruments/SingingBowl';

const soundsData : any =  {};

const registerInstumentSounds = () => {
  let singingBowl = new SingingBowl();
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