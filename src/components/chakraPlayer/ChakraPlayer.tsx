import React, { useEffect, useRef, useState } from 'react';
import { ChakraInterface } from '../Chakra';
import './ChakraPlayer.css'
import { Animation } from '@ionic/react';
import { MetalSingingBowl } from 'instruments/MetalSingingBowl';
import pulsating from 'animations/pulsating';
import rotation from 'animations/rotation';
import ChakraShape from '../chakraShape/ChakraShape';
import ChakraCenter from '../chakraCenter/ChakraCenter';
import { useDispatch } from 'react-redux';
import SoundPlayer from 'components/soundPlayer/SoundPlayer';

const ChakraPlayer: React.FC<{ chakra: ChakraInterface, vocals?: any }> = ({ chakra, vocals = null }) => {
    const dispatch = useDispatch();

    const singingBowl = new MetalSingingBowl();
    let isSoundPlaying = false;

    const chakraShapeRef = useRef<HTMLDivElement>(null);
    const chakraCircleRef = useRef<HTMLDivElement | null>(null);
    const rotationAnimation = useRef<Animation | null>(null);
    const pulsatingAnimation = useRef<Animation | null>(null);

    useEffect(rotation(rotationAnimation, chakraShapeRef), [chakraShapeRef]);
    useEffect(pulsating(pulsatingAnimation, chakraCircleRef), [chakraCircleRef]);

    //TODO : handle a sound ending via redux
    // const [play, { sound, pause }] = useSound(singingBowl.getSoundPath(chakra.note, SoundBowlGestureEnum.Glide), { volume: 0.2 });

    // sound?.on('end', () => {
    //     setSoundIsPlaying(false);
    //     rotationAnimation.current?.pause();
    //     pulsatingAnimation.current?.pause();
    // })

    const toggle = () => {
        if (isSoundPlaying) {
            rotationAnimation.current?.pause();
            pulsatingAnimation.current?.pause();
            dispatch(singingBowl.stopGlide(chakra.note));
            isSoundPlaying = false;
        } else {
            rotationAnimation.current?.play();
            pulsatingAnimation.current?.play();
            dispatch(singingBowl.glide(chakra.note));
            isSoundPlaying = true;
        }
    };

    return (
        <div className={`chakra-player-container ${chakra.position}`}>
            <ChakraShape reference={chakraShapeRef} chakra={chakra}>
                <div ref={chakraCircleRef} className={`chakra-player ${chakra.nameAsString}-player ${isSoundPlaying ? 'is-playing' : ''}`} onClick={toggle
                }>
                    <ChakraCenter chakra={chakra} />
                </div>
            </ChakraShape>

            { vocals && <SoundPlayer props={{ src: vocals, chakraName: chakra.name }} /> }
        </div>
    );
}

export default ChakraPlayer;