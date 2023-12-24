import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InstumentName } from 'instruments/InstrumentInterface';
import { NoteEnum } from 'sounds/NoteEnum';

type Sound = {
  play : string;
  stop : string;
};

type Meta = { 
  sound : any;
}

type Payload = { 
  instrument : InstumentName;
  note : NoteEnum;
}

export const sheetMusicSlice = createSlice({
  name: 'sheetMusic',
  initialState: {
    actions: [] as Payload[]
  },
  reducers: {
    performAction: {
      reducer: (state, action: PayloadAction<Payload /*payload*/, string /*type*/, Meta/*meta*/>) => {
        state.actions.push(action.payload);
        let method = action.meta.sound.play ? 'Play' : 'Stop';
 
        action.type = `${method} ${action.payload.note} on ${action.payload.instrument}`;
        
        return state;
      },
      prepare: (payload : Payload, meta: Meta) => {

        return ({ payload, meta });
      }
  }
    
  }
});

export const { performAction: playNote } = sheetMusicSlice.actions;

export default sheetMusicSlice.reducer;