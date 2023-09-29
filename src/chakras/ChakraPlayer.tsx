import React, { useEffect, useRef } from 'react';
import { ChakraInterface } from './Chakra';
import './ChakraPlayer.css'
import { createAnimation, Animation } from '@ionic/react';
import useSound from 'use-sound';
import { MethodEnum, SingingBowl } from '../instruments/SingingBowl';

const ChakraPlayer: React.FC<{ chakra: ChakraInterface }> = ({ chakra }) => {
    const chakraCircleRef = useRef<HTMLDivElement | null>(null);
    const animation = useRef<Animation | null>(null);

    useEffect(() => {
        if (animation.current === null) {
            //TODO: Add rotation if it looks better, when the note cirles are in place
            const rotatingAnimation = createAnimation()
                .addElement(chakraCircleRef.current!)
                .keyframes([
                    { offset: 0, transform: 'scale(1) rotate(0)' },
                    { offset: 0.15, transform: 'scale(1.03) rotate(0)' },
                    { offset: 0.3, transform: 'scale(1.05) rotate(0)' },
                    { offset: 0.5, transform: 'scale(1.1) rotate(0)' },
                    { offset: 0.75, transform: 'scale(1.05) rotate(0)' },
                    { offset: 0.85, transform: 'scale(1.03) rotate(0)' },
                    { offset: 1, transform: 'scale(1) rotate(0)' }
                ]);

            animation.current = createAnimation()
                .addElement(chakraCircleRef.current!)
                .duration(5000)
                .iterations(Infinity)
                .addAnimation([rotatingAnimation]);
        }
    }, [chakraCircleRef]);

    const toggleAnimation = () => {
        animation.current?.isRunning() ? animation.current?.pause() : animation.current?.play();
    };

    const singingBowl = new SingingBowl();

    const [strikeSoundBowl] = useSound(singingBowl.getSoundPath(chakra.note, MethodEnum.Strike), { volume: 0.01 });
    const [glideSoundBowl] = useSound(singingBowl.getSoundPath(chakra.note, MethodEnum.Glide), { volume: 0.01 });

    return (<div ref={chakraCircleRef} className={`${chakra.nameAsString}-player ${chakra.position}`}
        onClick={() => {
            toggleAnimation();
            strikeSoundBowl();
        }} onDoubleClick={() => {
            glideSoundBowl();
        }} />);
}

export default ChakraPlayer;