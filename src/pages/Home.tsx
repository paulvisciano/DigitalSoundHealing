import React from 'react';
import './Home.css';
import ChakraPlayer from '../chakras/ChakraPlayer';
import { PlayerPositionEnum } from '../colors/PlayerPosition';

const Home: React.FC = () => <ChakraPlayer playerPosition={PlayerPositionEnum.FullScreen}/>

export default Home;