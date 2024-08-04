import { IonPicker, IonPickerColumn, IonPickerColumnOption } from "@ionic/react";
import tracks, { Track } from "pages/realms/musicalCubes/tracks";
import { useEffect, useState } from "react";

interface Props {
    initialTrack: Track;
    onTrackSelected(selectedTrack: any): void;
}

const TrackPicker: React.FC<Props> = ({ initialTrack, onTrackSelected }) =>
    <IonPicker>
        <IonPickerColumn value={initialTrack?.name} onIonChange={({ detail }) => {
            onTrackSelected(tracks.find(track => track.name === detail.value));
        }} >
            {
                tracks.map(track => (
                    <IonPickerColumnOption key={track.name} value={track.name}>{track.name}</IonPickerColumnOption>
                ))
            }
        </IonPickerColumn>
    </IonPicker>

export default TrackPicker;