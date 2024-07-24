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
      <IonRow>
        {Object.entries(tracks).map((track) => {
          let trackName = track[0];
          let trackSounds = track[1]
          let melodySounds = trackSounds.filter(path => path.indexOf('\/melody') != -1);
          let oneShotSounds = trackSounds.filter(path => path.indexOf('\/one_shots') != -1);

          return (
            <div key={trackName} style={{ paddingRight: 100 }}>
              <p>{trackName}</p>
              <IonCol>
                <IonGrid >
                  {melodySounds.length > 0 ? (
                    <IonRow style={{ paddingBottom: 100 }}>
                      <MusicalCube label="Melody" sounds={melodySounds} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
                    </IonRow>
                  ) : null}

                  {oneShotSounds.length > 0 ? (
                    <IonRow >
                      <MusicalCube size={{ height: 250, width: 250 }} enableSync={false} enableLoop={false} sounds={oneShotSounds} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
                    </IonRow>) : null}
                </IonGrid>
              </IonCol>
            </div>
          )
        }
        )}
      </IonRow>

    </IonGrid>
  )
}

export default MusicalCubesRealm;  