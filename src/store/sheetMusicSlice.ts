import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InstumentName } from 'instruments/InstrumentInterface';

type Meta = {
  sound: any;
}

type PlayPayload = {
  instrument: InstumentName;
}

type SheetMusicAction = {
  instrument: InstumentName;
  sound: Meta;
}

export const sheetMusicSlice = createSlice({
  name: 'sheetMusic',
  initialState: {
    actions: [] as SheetMusicAction[]
  },
  reducers: {
    play: {
      reducer: (state, action: PayloadAction<PlayPayload /*payload*/, string /*type*/, Meta/*meta*/>) => {
        let sheetMusicAction = { instrument: action.payload.instrument, sound: action.meta.sound };

        state.actions.push(sheetMusicAction);

        return state;
      },
      prepare: (payload: any, meta: Meta) => ({ payload, meta })
    },
    stop: {
      reducer: (state, action: PayloadAction<any /*payload*/, string /*type*/, Meta/*meta*/>) => {
        let sheetMusicAction = { instrument: action.payload.instrument, sound: action.meta.sound };

        state.actions.push(sheetMusicAction);

        return state;
      },
      prepare: (payload: any, meta: Meta) => ({ payload, meta })
    }
  }
});

export const { play , stop } = sheetMusicSlice.actions;

export default sheetMusicSlice.reducer;