import React from 'react';
import { IonAccordion, IonAccordionGroup, IonIcon, IonItem, IonLabel, IonRange } from '@ionic/react';
import { volumeHighOutline, volumeOffOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import backgroundLofiAm from "../../assets/sounds/Background_Lofi_Am.wav";
import { AppState } from 'store/store';
import { AvailableBackgroundTracks } from './availableBackgroundTracks';
import { addTrack, changeVolume, play, stop } from 'store/backgroundTrackSlice';

const BackgroundTracks: React.FC = ({ }) => {
    const dispatch = useDispatch();
    const tracks = useSelector((state: AppState) => state.backgroundTrack.tracks);

    const onVolumeChange = (soundKey: string, detail: any) => {
        const volume = detail.value / 100;
        const existingTrack = tracks.find(track => track.soundKey === soundKey);

        if (!existingTrack) {
            const newTrack = { soundKey: soundKey, volume: volume };

            dispatch(addTrack(newTrack, {
                sound: {
                    add: {
                        BackgroundLofiAm: {
                            src: backgroundLofiAm, volume: volume, loop: true
                        }
                    }
                }
            }));

            dispatch(play({}, { sound: { play: soundKey } }))
        }
        else if(volume === 0.0) {
            dispatch(stop({ soundKey : soundKey}, { sound : { stop : soundKey }}));
        }
        else {
            dispatch(changeVolume({ soundKey: soundKey, volume: volume }, { sound: { volume: [soundKey, volume] } }))
        }
    };

    return (
        <IonAccordionGroup>
            <IonAccordion value="first">
                <IonItem slot="header">
                    <IonLabel>Background Tracks</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                    <IonRange mode='ios' pin={true} pinFormatter={(value: number) => `${value}%`} onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Backgrond_Lofi_Am, event.detail)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>
                    <IonRange mode='ios' pin={true} pinFormatter={(value: number) => `${value}%`}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>
                </div>
            </IonAccordion>
        </IonAccordionGroup>

    );
}

export default BackgroundTracks;