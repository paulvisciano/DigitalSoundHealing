import React, { createRef, useEffect, useRef } from 'react';
import { ChakraInterface } from './Chakra';
import './ChakraPlayer.css'
import { Animation } from '@ionic/react';
import useSound from 'use-sound';
import { MethodEnum, SingingBowl } from 'instruments/SingingBowl';
import pulsating from 'animations/pulsating';
import rotation from 'animations/rotation';
import ChakraShape from './chakraShape/ChakraShape';
import ChakraCenter from './chakraCenter/ChakraCenter';

const ChakraPlayer: React.FC<{ chakra: ChakraInterface }> = ({ chakra }) => {
    const chakraShapeRef = useRef<HTMLDivElement>(null);
    const chakraCircleRef = useRef<HTMLDivElement | null>(null);
    const rotationAnimation = useRef<Animation | null>(null);
    const pulsatingAnimation = useRef<Animation | null>(null);
    const singingBowl = new SingingBowl();

    useEffect(rotation(rotationAnimation, chakraShapeRef), [chakraShapeRef]);
    useEffect(pulsating(pulsatingAnimation, chakraCircleRef), [chakraCircleRef]);

    const toggleAnimation = () => {
        rotationAnimation.current?.isRunning() ? rotationAnimation.current?.pause() : rotationAnimation.current?.play();
        pulsatingAnimation.current?.isRunning() ? pulsatingAnimation.current?.pause() : pulsatingAnimation.current?.play();
    };

    const [glideSoundBowl] = useSound(singingBowl.getSoundPath(chakra.note, MethodEnum.Glide), { volume: 0.2 });

    return (
        <ChakraShape reference={chakraShapeRef} chakra={chakra}>
            <div ref={chakraCircleRef} className={`${chakra.nameAsString}-player`}
                onClick={() => {
                    toggleAnimation();
                    glideSoundBowl();
                }}>
                <ChakraCenter chakra={chakra}/>
            </div>
        </ChakraShape>
       );
}

export default ChakraPlayer;