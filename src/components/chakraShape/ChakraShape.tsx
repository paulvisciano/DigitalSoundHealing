import React, { useEffect, useRef } from 'react';
import { ChakraInterface } from '../Chakra';
import './ChakraShape.css'

const ChakraShape: React.FC<{ chakra: ChakraInterface, reference: React.LegacyRef<HTMLDivElement>, children: JSX.Element }> = ({ chakra, reference, children }) =>
    <div ref={reference} className={`${chakra.nameAsString}-shape-wrapper ${chakra.position}`}>
        {children}
    </div>

export default ChakraShape;