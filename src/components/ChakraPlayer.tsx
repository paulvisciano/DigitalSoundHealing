import React, { createRef, useEffect, useRef, useState } from 'react';
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
    const singingBowl = new SingingBowl();

    const [soundIsPlaying, setSoundIsPlaying] = useState(false);

    const chakraShapeRef = useRef<HTMLDivElement>(null);
    const chakraCircleRef = useRef<HTMLDivElement | null>(null);
    const rotationAnimation = useRef<Animation | null>(null);
    const pulsatingAnimation = useRef<Animation | null>(null);

    useEffect(rotation(rotationAnimation, chakraShapeRef), [chakraShapeRef]);
    useEffect(pulsating(pulsatingAnimation, chakraCircleRef), [chakraCircleRef]);

    const [play, { pause }] = useSound(singingBowl.getSoundPath(chakra.note, MethodEnum.Glide), { volume: 0.2 });

    const toggle = () => {
        if (soundIsPlaying) {
            rotationAnimation.current?.pause();
            pulsatingAnimation.current?.pause();
            pause();
            setSoundIsPlaying(false);
        } else {
            rotationAnimation.current?.play();
            pulsatingAnimation.current?.play();
            play();
            setSoundIsPlaying(true);
        }
    };

    return (
        <ChakraShape reference={chakraShapeRef} chakra={chakra}>
            <div ref={chakraCircleRef} className={`chakra-player ${chakra.nameAsString}-player`} onClick={toggle}>
                <ChakraCenter chakra={chakra} />
            </div>
        </ChakraShape>
    );
}

export default ChakraPlayer;