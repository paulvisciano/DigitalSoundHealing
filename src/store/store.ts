import { configureStore } from '@reduxjs/toolkit';
import soundsMiddleware from 'redux-sounds';
import sheetMusicReducer from './sheetMusicSlice';
import backgroundTrackReducer, { BackgroundTrackState } from './backgroundTrackSlice';
import { MetalSingingBowl } from 'instruments/MetalSingingBowl';

const soundsData : any =  {};

export type AppState = {
  sheetMusic : any;
  backgroundTrack : BackgroundTrackState;
};

const registerInstumentSounds = (soundsData : any) => {
  let singingBowl = new MetalSingingBowl();

  singingBowl.registerSounds(soundsData);
}

registerInstumentSounds(soundsData);

const loadedSoundsMiddleware = soundsMiddleware(soundsData);

export default configureStore({
  reducer: {
    sheetMusic: sheetMusicReducer,
    backgroundTrack : backgroundTrackReducer
  },
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().prepend(loadedSoundsMiddleware),
});