import React from 'react';
import { IonAccordion, IonAccordionGroup, IonIcon, IonItem, IonLabel, IonRange } from '@ionic/react';
import { volumeHighOutline, volumeOffOutline } from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import { playBackgroundTrack } from 'store/sheetMusicSlice';
import backgroundLofiAm from "../../assets/sounds/Background_Lofi_Am.wav";
import { AvailableBackgroundTracks } from './BackgroundTracksUtil';

const BackgroundTracks: React.FC = ({ }) => {
    const dispatch = useDispatch();

    const onVolumeChange = (soundKey : string, detail : any) => {
        const volume = detail.value / 100;

        dispatch(playBackgroundTrack({}, { sound: { stop : soundKey } }))
        dispatch(playBackgroundTrack({}, { sound: { add: { BackgroundLofiAm : { src : backgroundLofiAm, volume : volume, loop : true }} } }))
        dispatch(playBackgroundTrack({}, { sound: { play : soundKey }}))
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