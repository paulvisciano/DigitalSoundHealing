import { configureStore } from '@reduxjs/toolkit';
import soundsMiddleware from 'redux-sounds';
import sheetMusicReducer from './sheetMusicSlice';
import { SingingBowl, SoundBowlGestureEnum } from 'instruments/SingingBowl';
import { NoteEnum } from 'sounds/NoteEnum';

let singingBowl = new SingingBowl();

const soundsData : any =  {};

const registerSoundBowlSounds = () => {
  Object.values(NoteEnum).map(note =>  {
    soundsData[`strike${note.toUpperCase()}`] = singingBowl.getSoundPath(note, SoundBowlGestureEnum.Strike);
    soundsData[`glide${note.toUpperCase()}`] = singingBowl.getSoundPath(note, SoundBowlGestureEnum.Glide);
  })
}

registerSoundBowlSounds();

export default configureStore({
  reducer: {
    sheetMusic: sheetMusicReducer
  },
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().prepend(soundsMiddleware(soundsData)),
});