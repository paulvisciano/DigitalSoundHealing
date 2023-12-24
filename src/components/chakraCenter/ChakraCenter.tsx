import React, { useEffect, useRef } from 'react';
import { Animation } from '@ionic/react';
import { ChakraInterface } from 'components/Chakra';
import './ChakraCenter.css'
import { SingingBowl } from 'instruments/SingingBowl';
import pulsating from 'animations/pulsating';
import { useDispatch } from 'react-redux';
import { sheetMusicSlice } from 'store/sheetMusicSlice';

const ChakraCenter: React.FC<{ chakra: ChakraInterface }> = ({ chakra }) => {
    const chakraCenterRef = useRef<HTMLDivElement | null>(null);
    const pulsatingAnimation = useRef<Animation | null>(null);
    const singingBowl = new SingingBowl();
    const dispatch = useDispatch();

    useEffect(pulsating(pulsatingAnimation, chakraCenterRef), [chakraCenterRef]);

    const toggleAnimation = () => {
        pulsatingAnimation.current?.isRunning() ? pulsatingAnimation.current?.pause() : pulsatingAnimation.current?.play();
    };

    return (
        <div ref={chakraCenterRef} className={`chakra-center ${chakra.nameAsString}-center`} onClick={(event) => {
            let soundDataKey = `strike${chakra.note.toString()}`;

            dispatch(sheetMusicSlice.actions.performAction( { instrument : singingBowl.name, note : chakra.note } , { sound : { play : soundDataKey}} ));

            toggleAnimation();

            event.stopPropagation();
        }}>
            <div className='note-lbl' >{chakra.note}</div>
        </div>
    );
}

export default ChakraCenter;