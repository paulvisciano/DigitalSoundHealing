import React, { useEffect, useRef } from 'react';
import { Animation } from '@ionic/react';
import { ChakraInterface } from 'components/Chakra';
import './ChakraCenter.css'
import { MetalSingingBowl } from 'instruments/MetalSingingBowl';
import pulsating from 'animations/pulsating';
import { useDispatch } from 'react-redux';

const ChakraCenter: React.FC<{ chakra: ChakraInterface }> = ({ chakra }) => {
    const chakraCenterRef = useRef<HTMLDivElement | null>(null);
    const pulsatingAnimation = useRef<Animation | null>(null);
    const singingBowl = new MetalSingingBowl();
    const dispatch = useDispatch();

    useEffect(pulsating(pulsatingAnimation, chakraCenterRef), [chakraCenterRef]);

    const toggleAnimation = () => {
        pulsatingAnimation.current?.isRunning() ? pulsatingAnimation.current?.pause() : pulsatingAnimation.current?.play();
    };

    return (
        <div ref={chakraCenterRef} className={`chakra-center ${chakra.nameAsString}-center`} onClick={(event) => {
            dispatch(singingBowl.strike(chakra.note));

            toggleAnimation();

            event.stopPropagation();
        }}>
            <div className='note-lbl' >{chakra.note}</div>
        </div>
    );
}

export default ChakraCenter;