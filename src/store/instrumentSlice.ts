import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InstrumentName } from 'instruments/InstrumentName';

type Meta = {
  sound: any;
}

type PlayInstrumentPayload = {
  instrument: InstrumentName;
}

type SheetMusicAction = {
  instrument: InstrumentName;
  sound: Meta;
}

const _playPause = (state : any, action: PayloadAction<PlayInstrumentPayload /*payload*/, string /*type*/, Meta/*meta*/>) => {
  let sheetMusicAction = { name: action.payload.instrument, sound: action.meta.sound };

  state.actions.push(sheetMusicAction);

  return state;
}

export const instumentSlice = createSlice({
  name: 'instrument',
  initialState: {
    actions: [] as SheetMusicAction[]
  },
  reducers: {
    play: {
      reducer: _playPause,
      prepare: (payload: any, meta: Meta) => ({ payload, meta })
    },
    stop: {
      reducer: _playPause,
      prepare: (payload: any, meta: Meta) => ({ payload, meta })
    }
  }
});

export const { play , stop } = instumentSlice.actions;

export default instumentSlice.reducer;