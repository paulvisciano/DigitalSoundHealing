import React from 'react';
import { PositionEnum } from '../colors/PositionsEnum';
import ChakrasComponent from '../chakras/ChakrasComponent';

const chakraPositions = [PositionEnum.TopLeft, PositionEnum.TopMiddle, PositionEnum.TopRight,
PositionEnum.Center,
PositionEnum.BottomLeft, PositionEnum.BottomMiddle, PositionEnum.BottomRight];

const ChakraPlayer: React.FC<{ position: PositionEnum }> = ({ position }) =>
    <div style={{width : 500, height : 500, borderRadius : 0, overflow: 'hidden'}} className={position.toString()}>
        {
        chakraPositions.map(chakraPosition => <ChakrasComponent position={chakraPosition}></ChakrasComponent>)
    }</div>

export default ChakraPlayer;