import React from 'react';
import { IonMenu, IonContent, IonPage, IonHeader, IonMenuButton, IonToolbar } from '@ionic/react';
import "positions/Positions.css";
import BackgroundTracks from 'components/backgroundTracks/backgroundTracks';
import './Home.css';
import Realms from './realms/Index';

const Home: React.FC = () => {
  return (<>
    <IonMenu contentId="main-content" side='end'>
      <IonContent>
        <BackgroundTracks />
      </IonContent>
    </IonMenu>
    <IonPage id="main-content">
    <IonHeader className='transparent'>
      <IonToolbar>
        <IonMenuButton slot="end"></IonMenuButton>
      </IonToolbar>
    </IonHeader>
      <IonContent class="fullscreen-content" fullscreen={true}>
        <Realms/>
      </IonContent>
    </IonPage>
  </>)
}

export default Home;