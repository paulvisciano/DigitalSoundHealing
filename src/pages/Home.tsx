import React from 'react';
import './Home.css';
import ChakraPlayer from '../chakras/ChakraPlayer';
import { Chakra, ChakraEnum } from '../chakras/Chakra';
import "../positions/Positions.css";

export const Chakras = [
  new Chakra(ChakraEnum.Crown),
  new Chakra(ChakraEnum.ThirdEye),
  new Chakra(ChakraEnum.Throat),
  new Chakra(ChakraEnum.Heart),
  new Chakra(ChakraEnum.Solar),
  new Chakra(ChakraEnum.Sacral),
  new Chakra(ChakraEnum.Root),
];

const Home: React.FC = () => <>{Chakras.map(chakra => (<ChakraPlayer key={`${chakra.name}_${chakra.note}`} chakra={chakra}/>))}</>

export default Home;