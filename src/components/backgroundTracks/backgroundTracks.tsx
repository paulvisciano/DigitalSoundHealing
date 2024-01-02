import React from 'react';
import { IonAccordion, IonAccordionGroup, IonIcon, IonItem, IonLabel, IonRange } from '@ionic/react';
import { volumeHighOutline, volumeOffOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store/store';
import { AvailableBackgroundTracks } from './availableBackgroundTracks';
import { addTrack, changeVolume, play, stop } from 'store/backgroundTrackSlice';
import backgroundLofiAm from "../../assets/sounds/Background_Lofi_Am.wav";
import backgroundPercAm from "../../assets/sounds/Background_Perc_Am.wav";

const BackgroundTracks: React.FC = ({ }) => {
    const dispatch = useDispatch();
    const tracks = useSelector((state: AppState) => state.backgroundTrack.tracks);

    const onVolumeChange = (soundKey: AvailableBackgroundTracks, detail: any, src: any) => {
        const volume = detail.value / 100;
        const existingTrack = tracks.find(track => track.soundKey === soundKey);

        if (!existingTrack) {
            const newTrack = { soundKey: soundKey, volume: volume };
            let addMeta: any = { sound: { add: {} } };

            addMeta.sound.add[soundKey] = { src: src, volume: volume, loop: true };

            dispatch(addTrack(newTrack, addMeta));

            dispatch(play({}, { sound: { play: soundKey } }))
        }
        else if (volume === 0.0)
            dispatch(stop({ soundKey: soundKey }, { sound: { stop: soundKey } }));
        else
            dispatch(changeVolume({ soundKey: soundKey, volume: volume }, { sound: { volume: [soundKey, volume] } }))
    };

    return (
        <IonAccordionGroup>
            <IonAccordion value="first">
                <IonItem slot="header">
                    <IonLabel>Background Tracks</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                    <IonRange mode='ios' pin={true} pinFormatter={(value: number) => `${value}%`}
                        onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Background_Lofi_Am, event.detail, backgroundLofiAm)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>
                    <IonRange mode='ios' pin={true} pinFormatter={(value: number) => `${value}%`}
                        onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Background_Perc_Am, event.detail, backgroundPercAm)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>
                </div>
            </IonAccordion>
        </IonAccordionGroup>

    );
}

export default BackgroundTracks;