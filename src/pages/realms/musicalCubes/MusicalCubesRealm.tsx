import "./MusicalCubesRealm.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import tracks from "./sounds";

const MusicalCubesRealm: React.FC = () => {
  let sharedTrackTime = 0;
  let setSharedTrackTime = (newTrackTime: number) => {
    sharedTrackTime = newTrackTime;
  }
  const getSharedTrackTime = () => sharedTrackTime;

  return (
    <IonGrid class="musical-realm">
      <IonRow class="ion-align-items-center">
        {Object.entries(tracks).map((track) => {
          let trackName = track[0];
          let trackSounds = track[1]
          let melodySounds = trackSounds.filter(path => path.indexOf('\/melody') != -1);
          let oneShotSounds = trackSounds.filter(path => path.indexOf('\/one_shots') != -1);

          return (
              <IonCol key={trackName}>
                <p>{trackName}</p>

                <IonGrid>
                  {oneShotSounds.length > 0 ? (
                    <IonRow style={{ paddingBottom: 50 }}>
                      <IonCol>
                        <MusicalCube size={{ height: 225, width: 225 }} enableSync={false} enableLoop={false} sounds={oneShotSounds} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
                      </IonCol>
                    </IonRow>) : null}

                  {melodySounds.length > 0 ? (
                    <IonRow >
                      <IonCol>
                      <MusicalCube label="Melody" sounds={melodySounds} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
                      </IonCol>
                    </IonRow>
                  ) : null}
                </IonGrid>
              </IonCol>
          )
        }
        )}
      </IonRow>

    </IonGrid>
  )
}

export default MusicalCubesRealm;  