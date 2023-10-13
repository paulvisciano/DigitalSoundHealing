import React, { useEffect, useRef } from 'react';
import { ChakraInterface } from './Chakra';
import './ChakraPlayer.css'
import { createAnimation, Animation } from '@ionic/react';
import useSound from 'use-sound';
import { MethodEnum, SingingBowl } from '../instruments/SingingBowl';
import pulsating from '../animations/pulsating';
import GesturePath from '../animations/GesturePath';

const gestures = {
    Coil: [
      { x: 0, y: 0 },
      { x: 7, y: 18 },
      { x: 15, y: 35 },
      { x: 32, y: 45 },
      { x: 52, y: 45 },
      { x: 68, y: 35 },
      { x: 80, y: 20 },
      { x: 85, y: 0 },
      { x: 90, y: -20 },
      { x: 90, y: -40 },
      { x: 85, y: -60 },
      { x: 75, y: -77 },
      { x: 62, y: -92 },
      { x: 46, y: -102 },
      { x: 28, y: -110 },
      { x: 9, y: -113 },
    ],
  };

const ChakraPlayer: React.FC<{ chakra: ChakraInterface }> = ({ chakra }) => {
    const chakraCircleRef = useRef<HTMLDivElement | null>(null);
    const noteLblRef = useRef<HTMLDivElement | null>(null);
    const animation = useRef<Animation | null>(null);
    const singingBowl = new SingingBowl();

    useEffect(pulsating(animation, chakraCircleRef), [chakraCircleRef]);

      return (<div ref={chakraCircleRef} className={`${chakra.nameAsString}-player ${chakra.position}`}
        >
      <GesturePath path={gestures["Coil"]} color="purple" slopRadius={10} />

            <div className='inner-circle-2'>
        <div className='inner-circle-1'> 
      </div>
      </div>
    </div>);
}

export default ChakraPlayer;