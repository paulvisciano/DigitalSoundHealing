import React, { useEffect, useRef } from 'react';
import { ChakraInterface } from './Chakra';
import './ChakraPlayer.css'
import { createAnimation, Animation } from '@ionic/react';
import useSound from 'use-sound';
import { MethodEnum, SingingBowl } from '../instruments/SingingBowl';
import pulsating from '../animations/pulsating';


const ChakraPlayer: React.FC<{ chakra: ChakraInterface }> = ({ chakra }) => {
    const chakraCircleRef = useRef<HTMLDivElement | null>(null);
    const noteLblRef = useRef<HTMLDivElement | null>(null);
    const animation = useRef<Animation | null>(null);
    const singingBowl = new SingingBowl();

    useEffect(pulsating(animation, chakraCircleRef), [chakraCircleRef]);

    const toggleAnimation = () => {
        animation.current?.isRunning() ? animation.current?.pause() : animation.current?.play();
    };

    const [strikeSoundBowl] = useSound(singingBowl.getSoundPath(chakra.note, MethodEnum.Strike), { volume: 0.1 });
    const [glideSoundBowl] = useSound(singingBowl.getSoundPath(chakra.note, MethodEnum.Glide), { volume: 0.2 });

    return (
        <div className={`${chakra.nameAsString}-shape-wrapper ${chakra.position}`}>
            <div ref={chakraCircleRef} className={`${chakra.nameAsString}-player`}
                onClick={() => {
                    toggleAnimation();
                    strikeSoundBowl();
                }}>
                <div className='chakra-center' onClick={() => {
                    glideSoundBowl();
                }}>
                    <div ref={noteLblRef} className='note-lbl' >{chakra.note}</div>
                </div>
            </div>
        </div>);
}

export default ChakraPlayer;