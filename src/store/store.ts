import { configureStore } from '@reduxjs/toolkit';
import soundsMiddleware from 'redux-sounds';
import sheetMusicReducer from './sheetMusicSlice';
import { MetalSingingBowl } from 'instruments/MetalSingingBowl';
import { BackgroundTracksUtil } from 'components/backgroundTracks/BackgroundTracksUtil';

const soundsData : any =  {};

const registerInstumentSounds = (soundsData : any) => {
  let singingBowl = new MetalSingingBowl();

  singingBowl.registerSounds(soundsData);
}

const registerBackgroundTracks = (soundsData : any) => {
  let backgroundTracks = new BackgroundTracksUtil();

  backgroundTracks.registerSounds(soundsData);
};

registerInstumentSounds(soundsData);
registerBackgroundTracks(soundsData);

const loadedSoundsMiddleware = soundsMiddleware(soundsData);

export default configureStore({
  reducer: {
    sheetMusic: sheetMusicReducer
  },
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().prepend(loadedSoundsMiddleware),
});