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

    const [glideSoundBowl] = useSound(singingBowl.getSoundPath(chakra.note, MethodEnum.Glide), { volume: 0.2 });

    return (
        <div ref={chakraCenterRef} className='chakra-center' onClick={(event) => {
            glideSoundBowl();
            toggleAnimation();
            event.stopPropagation();

        }}>
            <div className='note-lbl' >{chakra.note}</div>
        </div>
    );
}

export default ChakraCenter;