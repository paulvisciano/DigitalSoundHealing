import React from 'react';
import { PositionEnum } from '../colors/PositionsEnum';
import ChakrasComponent from '../chakras/ChakrasComponent';
import { PlayerPositionEnum } from '../colors/PlayerPosition';
import './ChakraPlayer.css';

const chakraPositions = [PositionEnum.TopLeft, PositionEnum.TopMiddle, PositionEnum.TopRight,
PositionEnum.Center,
PositionEnum.BottomLeft, PositionEnum.BottomMiddle, PositionEnum.BottomRight];

const ChakraPlayer: React.FC<{ playerPosition: PlayerPositionEnum }> = ({ playerPosition = PlayerPositionEnum.FullScreen  }) =>
    <div className={`chakra-player ${playerPosition.toString()}`}>
        {
        chakraPositions.map(chakraPosition => <ChakrasComponent position={chakraPosition}></ChakrasComponent>)
    }</div>

export default ChakraPlayer;