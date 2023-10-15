import React, { useEffect, useRef } from 'react';
import { ChakraInterface } from './Chakra';
import './ChakraPlayer.css'
import { Animation } from '@ionic/react';
import useSound from 'use-sound';
import { MethodEnum, SingingBowl } from '../instruments/SingingBowl';
import pulsating from '../animations/pulsating';
import rotation from '../animations/rotation';


const ChakraPlayer: React.FC<{ chakra: ChakraInterface }> = ({ chakra }) => {
    const chakraShapeRef = useRef<HTMLDivElement | null>(null);
    const chakraCircleRef = useRef<HTMLDivElement | null>(null);
    const noteLblRef = useRef<HTMLDivElement | null>(null);
    const animation = useRef<Animation | null>(null);
    const pulsatingAnimation = useRef<Animation | null>(null);
    const singingBowl = new SingingBowl();

    useEffect(rotation(animation, chakraShapeRef), [chakraShapeRef]);
    useEffect(pulsating(pulsatingAnimation, chakraCircleRef), [chakraCircleRef]);

    const toggleAnimation = () => {
        animation.current?.isRunning() ? animation.current?.pause() : animation.current?.play();
        pulsatingAnimation.current?.isRunning() ? pulsatingAnimation.current?.pause() : pulsatingAnimation.current?.play();
    };

    const [strikeSoundBowl] = useSound(singingBowl.getSoundPath(chakra.note, MethodEnum.Strike), { volume: 0.1 });
    const [glideSoundBowl] = useSound(singingBowl.getSoundPath(chakra.note, MethodEnum.Glide), { volume: 0.2 });

    return (
        <div ref={chakraShapeRef} className={`${chakra.nameAsString}-shape-wrapper ${chakra.position}`} onClick={() => toggleAnimation()}>
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