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
          <MusicalCube label="Melody" sounds={[InTheCity.Piano, InTheCity.Guitar, InTheCity.Brass, InTheCity.Brass]} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
        </IonCol>
        <IonCol>
          <MusicalCube size={{ height: 250, width: 250 }} enableSync={false} enableLoop={false} sounds={[InTheCity.Brass_Choo_Choo, InTheCity.Brass_Stab_Bump, InTheCity.Sub, InTheCity.Sub]} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
        </IonCol>
        <IonCol>
          <MusicalCube sounds={[InTheCity.Vocals, InTheCity.Vocals, InTheCity.Vocals, InTheCity.Vocals]} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default MusicalCubesRealm;  