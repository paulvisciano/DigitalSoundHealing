import "./MusicalCubesRealm.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { CubeSound } from "./sounds/CubeSound";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

const MusicalCubesRealm: React.FC = () => {
  return (
    <IonGrid class="musical-realm">
      <IonRow class="ion-align-items-center">
        <IonCol>
          <MusicalCube label="Guitar" sounds={[CubeSound.guitarB, CubeSound.melodyB, CubeSound.vocalsAm, CubeSound.brassAm]} />
        </IonCol>
        <IonCol>
          <MusicalCube label="Vocals" sounds={[CubeSound.vocalsAm, CubeSound.melodyB, CubeSound.vocalsAm, CubeSound.brassAm]} />
        </IonCol>
        <IonCol>
          <MusicalCube label="Brass" sounds={[CubeSound.brassAm, CubeSound.melodyB, CubeSound.vocalsAm, CubeSound.brassAm]} />
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default MusicalCubesRealm;  