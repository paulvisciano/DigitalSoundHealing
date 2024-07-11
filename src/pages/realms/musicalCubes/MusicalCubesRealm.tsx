import "./MusicalCubesRealm.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { CubeSound } from "./sounds/CubeSound";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

const MusicalCubesRealm: React.FC = () => {

  let sharedTrackTime = 0;
  let setSharedTrackTime = (newTrackTime: number) => {
    sharedTrackTime = newTrackTime;
  }

  const getSharedTrackTime = () => sharedTrackTime;


  return (
    <IonGrid class="musical-realm">
      <IonRow class="ion-align-items-center">
        <IonCol>
          <MusicalCube label="Guitar" sounds={[CubeSound.guitarB, CubeSound.melodyB, CubeSound.vocalsAm, CubeSound.brassAm]} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
        </IonCol>
        <IonCol>
          <MusicalCube label="Vocals" sounds={[CubeSound.vocalsAm, CubeSound.melodyB, CubeSound.vocalsAm, CubeSound.brassAm]} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
        </IonCol>
        <IonCol>
          <MusicalCube label="Brass" sounds={[CubeSound.brassAm, CubeSound.melodyB, CubeSound.vocalsAm, CubeSound.brassAm]} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default MusicalCubesRealm;  