import React, { createRef, useEffect, useRef, useState } from 'react';
import { ChakraInterface } from './Chakra';
import './ChakraPlayer.css'
import { Animation } from '@ionic/react';
import useSound from 'use-sound';
import { SingingBowl } from 'instruments/SingingBowl';
import pulsating from 'animations/pulsating';
import rotation from 'animations/rotation';
import ChakraShape from './chakraShape/ChakraShape';
import ChakraCenter from './chakraCenter/ChakraCenter';
import { useDispatch, useSelector } from 'react-redux';
import { playSound, selectPlayedNotes } from './ChakraPlayerSlice';
import { InstrumentGestureEnum } from 'instruments/InstrumentInterface';

const ChakraPlayer: React.FC<{ chakra: ChakraInterface }> = ({ chakra }) => {
    const playedNotes = useSelector(selectPlayedNotes);
    const dispatch = useDispatch();

    const singingBowl = new SingingBowl();

    const [soundIsPlaying, setSoundIsPlaying] = useState(false);

    const chakraShapeRef = useRef<HTMLDivElement>(null);
    const chakraCircleRef = useRef<HTMLDivElement | null>(null);
    const rotationAnimation = useRef<Animation | null>(null);
    const pulsatingAnimation = useRef<Animation | null>(null);

    useEffect(rotation(rotationAnimation, chakraShapeRef), [chakraShapeRef]);
    useEffect(pulsating(pulsatingAnimation, chakraCircleRef), [chakraCircleRef]);

    const [play, { sound, pause }] = useSound(singingBowl.getSoundPath(chakra.note, InstrumentGestureEnum.Glide), { volume: 0.2 });

    sound?.on('end', () => {
        setSoundIsPlaying(false);
        rotationAnimation.current?.pause();
        pulsatingAnimation.current?.pause();
    })

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
            <div ref={chakraCircleRef} className={`chakra-player ${chakra.nameAsString}-player ${soundIsPlaying ? 'is-playing' : ''}`} onClick={() => dispatch(playSound({ instrument: singingBowl, note: chakra.note, gesture : InstrumentGestureEnum.Glide}))}>
                <ChakraCenter chakra={chakra} />
                {playedNotes ? <span> Played notes {playedNotes}</span> : null}
            </div>
        </ChakraShape>
    );
}

export default ChakraPlayer;