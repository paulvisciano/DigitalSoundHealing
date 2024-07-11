import "./MusicalCubesRealm.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { InTheCity } from "./sounds/CubeSound";
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
          <MusicalCube label="Melody" sounds={[InTheCity.piano, InTheCity.guitar, InTheCity.brass, InTheCity.brass]} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
        </IonCol>
        <IonCol>
          <MusicalCube label="One Shots" size={{ height: 200, width: 200 }} enableSync={false} enableLoop={false} sounds={[InTheCity.brass_oneShot, InTheCity.melody_noHorns, InTheCity.melody_noGuitar, InTheCity.melody_noKeys]} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
        </IonCol>
        <IonCol>
          <MusicalCube label="Vocals" sounds={[InTheCity.vocals, InTheCity.vocals, InTheCity.vocals, InTheCity.vocals]} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default MusicalCubesRealm;  