import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InstumentName } from 'instruments/InstrumentInterface';

type Meta = {
  sound: any;
}

type PlayInstrumentPayload = {
  instrument: InstumentName;
}

type SheetMusicAction = {
  instrument: InstumentName;
  sound: Meta;
}

const _playPause = (state : any, action: PayloadAction<PlayInstrumentPayload /*payload*/, string /*type*/, Meta/*meta*/>) => {
  let sheetMusicAction = { instrument: action.payload.instrument, sound: action.meta.sound };

  state.actions.push(sheetMusicAction);

  return state;
}

export const sheetMusicSlice = createSlice({
  name: 'sheetMusic',
  initialState: {
    actions: [] as SheetMusicAction[]
  },
  reducers: {
    play: {
      reducer: _playPause,
      prepare: (payload: any, meta: Meta) => ({ payload, meta })
    },
    playBackgroundTrack : {
      reducer: (state : any, action: PayloadAction<any /*payload*/, string /*type*/, Meta/*meta*/>) => {
        // let sheetMusicAction = { instrument: action.payload.instrument, sound: action.meta.sound };
      
        // state.actions.push(sheetMusicAction);
      
        return state;
      },
      prepare: (payload: any, meta: any) => ({ payload, meta })
    },
    stop: {
      reducer: _playPause,
      prepare: (payload: any, meta: Meta) => ({ payload, meta })
    }
  }
});

export const { play , stop, playBackgroundTrack} = sheetMusicSlice.actions;

export default sheetMusicSlice.reducer;