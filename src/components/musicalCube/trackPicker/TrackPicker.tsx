import { IonPicker, IonPickerColumn, IonPickerColumnOption } from "@ionic/react";
import tracks from "pages/realms/musicalCubes/tracks";

interface Props {
 onTrackSelected(selectedTrack: any): void;   
}

const TrackPicker: React.FC<Props> = ({onTrackSelected}) => {
    return (
        <IonPicker>
          <IonPickerColumn onIonChange={(newVal) => onTrackSelected(newVal?.detail.value)} >
            {
                tracks.map(track => (
                    <IonPickerColumnOption key={track.name} value={track}>{track.name}</IonPickerColumnOption>
                ))
            }
          </IonPickerColumn>
        </IonPicker>
    )
  }
  
  export default TrackPicker;