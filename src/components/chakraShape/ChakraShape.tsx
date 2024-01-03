import React from 'react';
import { ChakraInterface } from '../Chakra';
import './ChakraShape.css'

const ChakraShape: React.FC<{ chakra: ChakraInterface, reference: React.LegacyRef<HTMLDivElement>, children: JSX.Element }> = ({ chakra, reference, children }) =>
    <div ref={reference} className={`chakra-shape ${chakra.nameAsString}-shape`}>
        {children}
    </div>

export default ChakraShape;