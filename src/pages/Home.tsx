import React from 'react';
import './Home.css';
import { PositionEnum } from '../colors/PositionsEnum';
import ChakrasComponent from '../chakras/ChakrasComponent';


const Home: React.FC = () => {
  // Could make this render dynamically 
return <div>
  <ChakrasComponent position={PositionEnum.TopLeft}></ChakrasComponent>
  <ChakrasComponent position={PositionEnum.TopMiddle}></ChakrasComponent>
  <ChakrasComponent position={PositionEnum.TopRight}></ChakrasComponent>


  <ChakrasComponent position={PositionEnum.Center}></ChakrasComponent>


  <ChakrasComponent position={PositionEnum.BottomLeft}></ChakrasComponent>
  <ChakrasComponent position={PositionEnum.BottomMiddle}></ChakrasComponent>
  <ChakrasComponent position={PositionEnum.BottomRight}></ChakrasComponent>
</div>
};

export default Home;