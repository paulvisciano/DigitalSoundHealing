import "./MusicalCubesRealm.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import TrackPicker from "components/musicalCube/trackPicker/TrackPicker";
import { useState } from "react";
import { Track } from "./tracks";

interface TrackCubeProps {
  track: Track;
}

const TrackCubes: React.FC<TrackCubeProps> = ({ track }) => {
  let sharedTrackTime = 0;
  let setSharedTrackTime = (newTrackTime: number) => {
    sharedTrackTime = newTrackTime;
  }
  const getSharedTrackTime = () => sharedTrackTime;
  let melodySounds = track.sounds.filter((path: string) => path.indexOf('\/melody') != -1);
  let oneShotSounds = track.sounds.filter((path: string) => path.indexOf('\/one_shots') != -1);

  return (
    <IonCol key={track.name}>
      <IonGrid>
        {melodySounds.length > 0 ? (
          <IonRow >
            <IonCol>
              <MusicalCube size={{ height: 250, width: 250 }} label="Melody" sounds={melodySounds} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
            </IonCol>
          </IonRow>
        ) : null}

        {oneShotSounds.length > 0 ? (
          <IonRow style={{ paddingBottom: 50 }}>
            <IonCol>
              <MusicalCube size={{ height: 200, width: 200 }} enableSync={false} enableLoop={false} sounds={oneShotSounds} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
            </IonCol>
          </IonRow>) : null}
      </IonGrid>
    </IonCol>
  )
}

const MusicalCubesRealm = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track>();

  return (<div className="musical-realm">
    <TrackPicker onTrackSelected={(newTrack: Track) => {
      setSelectedTrack(newTrack);
    }} />
    {selectedTrack && <TrackCubes track={selectedTrack} />}
  </div>)
};

export default MusicalCubesRealm;
