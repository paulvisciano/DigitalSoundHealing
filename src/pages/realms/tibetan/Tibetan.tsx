import { Chakra, ChakraEnum, ChakraInterface } from "components/Chakra";
import ChakraPlayer from "components/chakraPlayer/ChakraPlayer";

export const Chakras = [
    new Chakra(ChakraEnum.Crown),
    new Chakra(ChakraEnum.ThirdEye),
    new Chakra(ChakraEnum.Throat),
    new Chakra(ChakraEnum.Heart),
    new Chakra(ChakraEnum.Solar),
    new Chakra(ChakraEnum.Sacral),
    new Chakra(ChakraEnum.Root),
];

const TibetanRealm: React.FC = () => {
return (<>
    { Chakras.map((chakra: ChakraInterface) => (<ChakraPlayer key={`${chakra.name}_${chakra.note}`} chakra={chakra} />)) }
</>)
}

export default TibetanRealm;