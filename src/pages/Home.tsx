import React from 'react';
import './Home.css';
import ChakraPlayer from '../chakras/ChakraPlayer';
import { PositionEnum } from '../colors/PositionsEnum';

const Home: React.FC = () => <ChakraPlayer playerPosition={PositionEnum.BottomRight}/>

export default Home;