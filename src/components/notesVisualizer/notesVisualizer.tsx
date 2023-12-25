import React, {  } from 'react';
import { useSelector } from 'react-redux';
import { SheetMusicAction, selectMusicActions } from 'store/sheetMusicSlice';

//TODO: Finalize the visualizer
const NotesVisualizer: React.FC = ({  }) => {
    const sheetMusicActions = useSelector(selectMusicActions);

    return (
        <div>
            {sheetMusicActions.map((action : SheetMusicAction) => {
                return <div> {action.instrument} </div>
            })}
        </div>
    );
}

export default NotesVisualizer;