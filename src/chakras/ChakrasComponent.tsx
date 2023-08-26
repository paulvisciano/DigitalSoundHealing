import React, { useEffect, useRef } from 'react';
import { ChakraInterface, Chakras } from './Chakras';
import './ChakrasComponent.css';
import useSound from 'use-sound';
import bongo from "../assets/sounds/bongo.wav";
import { createAnimation, Animation } from '@ionic/react';
import { PositionEnum } from '../colors/PositionsEnum';

const BASE_SIZE = 800;

const ChakraCircle: React.FC<{ chakra: ChakraInterface, chakraNumber: number }> = ({ chakra, chakraNumber }) => {
    const size = BASE_SIZE * (1 - (chakraNumber / 10));

    const chakraCircleRef = useRef<HTMLDivElement | null>(null);
    const animation = useRef<Animation | null>(null);
  
    useEffect(() => {
      if (animation.current === null) {
        animation.current = createAnimation()
          .addElement(chakraCircleRef.current!)
          .duration(500)
          .iterations(1)
          .fromTo('opacity', '1', '0.2');
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
    
    const soundUrl = '../assets/sounds/bongo.wav';

    const [play, { stop }] = useSound(
        bongo,
        { volume: 0.5 }
    );

    const [isHovering, setIsHovering] = React.useState(
        false
    );

    const vibrate = () => {
      window.navigator.vibrate(200);
    }

    const playSoundAndVibrate = () => {
        vibrate();
        play();
    }

    return (<div className="chakraCircle"
        ref={chakraCircleRef}
        style={{
            backgroundColor: chakra.colorHex,
            height: size,
            width: size,
            borderRadius: size
        }}
        onClick={() => playSoundAndVibrate()}
        onMouseEnter={() => {
            setIsHovering(true);
            playAnimation();
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            playAnimation();
          }}>
    </div>);
}


const ChakrasComponent: React.FC<{ position: PositionEnum }> = ({ position }) => {
    return <div className={`chakraCircle ${position.toString()}`}>
        {
            Chakras.map((chakra: any, index: number) => <ChakraCircle key={chakra.name}
                chakra={chakra} chakraNumber={index + 1} />
            )
        }
    </div>
};

export default ChakrasComponent;
