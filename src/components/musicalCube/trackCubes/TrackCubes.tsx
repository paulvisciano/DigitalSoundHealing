import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { Track } from "pages/realms/musicalCubes/tracks";
import MusicalCube from "../musicalCube/MusicalCube";
import "./TrackCubes.css";

interface TrackCubeProps {
    track: Track;
}

const TrackCubes: React.FC<TrackCubeProps> = ({ track }) => {
    let sharedTrackTime = 0;

    const setSharedTrackTime = (newTrackTime: number) => sharedTrackTime = newTrackTime;
    const getSharedTrackTime = () => sharedTrackTime;

    let oneShotSounds = track.sounds.filter((path: string) => path.indexOf('\/one_shots') != -1);
    let melodySounds = track.sounds.filter((path: string) => path.indexOf('\/melody') != -1);

    return (
        <IonGrid key={track.name}>
            {oneShotSounds.length > 0 && (
                <IonRow className="one-shot-cube-container">
                    <IonCol>
                        <MusicalCube size={{ height: 200, width: 200 }} enableSync={false} enableLoop={false} sounds={oneShotSounds} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
                    </IonCol>
                </IonRow>)}

            { melodySounds.length > 0 && (
                <IonRow className={`ion-align-items-center melody-cube-container ${oneShotSounds.length == 0 ? 'only-melody-cube' : ''}`}>
                    <IonCol>
                        <MusicalCube size={{ height: 280, width: 280 }} sounds={melodySounds} setSharedTrackTime={setSharedTrackTime} getSharedTrackTime={getSharedTrackTime} />
                    </IonCol>
                </IonRow>
            )}
        </IonGrid>
    )
}

export default TrackCubes;