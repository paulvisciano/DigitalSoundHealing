import "./MusicalCubesRealm.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { MusicalCubeSound } from "./sounds/MusicalCubeSounds";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

const MusicalCubesRealm: React.FC = () => {
  return (
    <IonGrid class="musical-realm">
      <IonRow class="ion-align-items-center">
        <IonCol>
          <MusicalCube cubeId={1} label="Guitar" sounds={[MusicalCubeSound.guitarB, MusicalCubeSound.melodyB, MusicalCubeSound.vocalsAm, MusicalCubeSound.brassAm]} />
        </IonCol>
        <IonCol>
          <MusicalCube cubeId={2} label="Vocals" sounds={[MusicalCubeSound.vocalsAm, MusicalCubeSound.melodyB, MusicalCubeSound.vocalsAm, MusicalCubeSound.brassAm]} />
        </IonCol>
        <IonCol>
          <MusicalCube cubeId={3} label="Brass" sounds={[MusicalCubeSound.brassAm, MusicalCubeSound.melodyB, MusicalCubeSound.vocalsAm, MusicalCubeSound.brassAm]} />
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default MusicalCubesRealm;  