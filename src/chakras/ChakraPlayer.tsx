import React, { useEffect, useRef } from 'react';
import ChakrasComponent from '../chakras/ChakrasComponent';
import { ChakraInterface } from './Chakra';
import { Chakras } from '../pages/Home';
import './ChakraPlayer.css'
import { createAnimation, Animation } from '@ionic/react';

const ChakraPlayer: React.FC<{ chakra: ChakraInterface }> = ({ chakra }) => {

    const chakraCircleRef = useRef<HTMLDivElement | null>(null);
    const animation = useRef<Animation | null>(null);

    useEffect(() => {
        if (animation.current === null) {

            const rotatingAnimation = createAnimation()
                .addElement(chakraCircleRef.current!)
                .keyframes([
                    { offset: 0, transform: 'scale(1) rotate(0)' },
                    { offset: 0.15, transform: 'scale(1.03) rotate(45deg)' },
                    { offset: 0.3, transform: 'scale(1.05) rotate(90deg)' },
                    { offset: 0.5, transform: 'scale(1.08) rotate(125deg)' },
                    { offset: 0.75, transform: 'scale(1.05) rotate(180deg)' },
                    { offset: 0.85, transform: 'scale(1.03) rotate(270deg)' },
                    { offset: 1, transform: 'scale(1) rotate(360deg)' }
                ]);

            animation.current = createAnimation()
                .addElement(chakraCircleRef.current!)
                .duration(5000)
                .iterations(Infinity)
                .addAnimation([rotatingAnimation]);
        }
    }, [chakraCircleRef]);

    const playAnimation = () => {
        animation.current?.play();
    };
    const pauseAnimation = () => {
        animation.current?.pause();
    };
    const stopAnimation = () => {
        animation.current?.stop();
    };

    const [isHovering, setIsHovering] = React.useState(
        false
    );

    return (<div ref={chakraCircleRef} className={`${chakra.nameAsString}-player ${chakra.position}`} onMouseEnter={() => {
        setIsHovering(true);
        playAnimation();
    }}
        onMouseLeave={() => {
            setIsHovering(false);
            playAnimation();
        }}>
        {
            Chakras.map(chakra => (<ChakrasComponent chakra={chakra}></ChakrasComponent>))
        }</div>);
}


export default ChakraPlayer;