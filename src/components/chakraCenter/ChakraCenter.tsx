import React, { useEffect, useRef } from 'react';
import { Animation } from '@ionic/react';
import { ChakraInterface } from 'components/Chakra';
import './ChakraCenter.css'
import useSound from 'use-sound';
import { MethodEnum, SingingBowl } from 'instruments/SingingBowl';
import pulsating from 'animations/pulsating';

const ChakraCenter: React.FC<{ chakra: ChakraInterface }> = ({ chakra }) => {
    const chakraCenterRef = useRef<HTMLDivElement | null>(null);
    const pulsatingAnimation = useRef<Animation | null>(null);
    const singingBowl = new SingingBowl();

    useEffect(pulsating(pulsatingAnimation, chakraCenterRef), [chakraCenterRef]);

    const toggleAnimation = () => {
        pulsatingAnimation.current?.isRunning() ? pulsatingAnimation.current?.pause() : pulsatingAnimation.current?.play();
    };

    const [strikeSoundBowl] = useSound(singingBowl.getSoundPath(chakra.note, MethodEnum.Strike), { volume: 0.1 });

    return (
        <div ref={chakraCenterRef} className={`chakra-center ${chakra.nameAsString}-center`} onClick={(event) => {
            strikeSoundBowl();
            toggleAnimation();
            event.stopPropagation();

        }}>
            <div className='note-lbl' >{chakra.note}</div>
        </div>
    );
}

export default ChakraCenter;