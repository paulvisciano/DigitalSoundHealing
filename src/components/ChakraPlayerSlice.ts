import { CaseReducer, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { InstrumentGestureEnum, InstumentInterface } from 'instruments/InstrumentInterface';
import { NoteEnum } from 'sounds/NoteEnum';

interface PlayedNote {
    instrument: InstumentInterface;
    note: NoteEnum;
    gesture: InstrumentGestureEnum;
}

interface SheetMusicState {
    playedNotes: Array<PlayedNote>;
}

const initialState: SheetMusicState = {
    playedNotes: []
};

const _notePlayed: CaseReducer<SheetMusicState, PayloadAction<PlayedNote>> = (state, action) => {
    state.playedNotes.push(action.payload);
}

const _playNote : any = (payload : PlayedNote) => {
    // the inside "thunk function"
    return async (dispatch : any, getState : any) => {
        try {
            
            dispatch(_notePlayed(getState(), {payload : payload, type : 'test'}))
        } catch (err) {
            // If something went wrong, handle it here
            throw err;
        }
    }
}

export const chakraPlayerSlice = createSlice({
    name: 'sheetMusic',
    initialState: initialState,
    reducers: {
        playNote: _notePlayed,
        playSound : _playNote
    }
})

export const { playNote, playSound } = chakraPlayerSlice.actions

export const selectPlayedNotes = (state: any) => state.sheetMusic?.playedNotes;

export default chakraPlayerSlice.reducer