import React from 'react';
import { IonMenu, IonToolbar, IonContent, IonPage, IonMenuButton, IonHeader } from '@ionic/react';
import ChakraPlayer from 'components/chakraPlayer/ChakraPlayer';
import { Chakra, ChakraEnum } from 'components/Chakra';
import './Home.css';
import "positions/Positions.css";
import BackgroundTracks from 'components/backgroundTracks/backgroundTracks';

export const Chakras = [
  new Chakra(ChakraEnum.Crown),
  new Chakra(ChakraEnum.ThirdEye),
  new Chakra(ChakraEnum.Throat),
  new Chakra(ChakraEnum.Heart),
  new Chakra(ChakraEnum.Solar),
  new Chakra(ChakraEnum.Sacral),
  new Chakra(ChakraEnum.Root),
];

const Home: React.FC = () =>
  <>
    <IonMenu contentId="main-content" side='end'>
      <IonContent>
        <BackgroundTracks/>
      </IonContent>
    </IonMenu>
    <IonPage id="main-content">
      <IonHeader className='transparent'>
        <IonToolbar>
          <IonMenuButton slot="end"></IonMenuButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        {Chakras.map(chakra => (<ChakraPlayer key={`${chakra.name}_${chakra.note}`} chakra={chakra} />))}
      </IonContent>
    </IonPage>
  </>

export default Home;