import React from 'react';
import './Home.css';
import ChakraPlayer from '../chakras/ChakraPlayer';
import { Chakra, ChakraEnum } from '../chakras/Chakra';
import "../positions/Positions.css";

export const Chakras = [
  
  new Chakra(ChakraEnum.Heart),

];

const Home: React.FC = () => <>{Chakras.map(chakra => (<ChakraPlayer key={`${chakra.name}_${chakra.note}`} chakra={chakra}/>))}</>

export default Home;