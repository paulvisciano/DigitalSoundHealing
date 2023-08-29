import React from 'react';
import { PositionEnum } from '../colors/PositionsEnum';
import ChakrasComponent from '../chakras/ChakrasComponent';
import './ChakraPlayer.css';
import { ChakraInterface } from './Chakra';
import { Chakras } from '../pages/Home';

const ChakraPlayer: React.FC<{ chakra: ChakraInterface }> = ({ chakra }) => 
    <div className={`${chakra.nameAsString}-player ${chakra.position}`}>
        {
        Chakras.map(chakra => (<ChakrasComponent chakra={chakra}></ChakrasComponent>))
    }</div>

export default ChakraPlayer;