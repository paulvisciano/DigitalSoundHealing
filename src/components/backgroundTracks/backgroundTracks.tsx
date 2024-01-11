import React from 'react';
import { IonAccordion, IonAccordionGroup, IonIcon, IonItem, IonLabel, IonRange } from '@ionic/react';
import { volumeHighOutline, volumeOffOutline } from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store/store';
import { AvailableBackgroundTracks } from './availableBackgroundTracks';
import { addTrack, changeVolume, play, stop } from 'store/backgroundTrackSlice';

import backgroundLofiAm from "./assets/lofi/Background_Lofi_Am.wav";
import backgroundPercAm from "./assets/lofi//Background_Perc_Am.wav";
import backgroundHarpAm from "./assets/lofi//Background_Harp_Am.wav";

import athmosphere_Vocal_Fsharpm from "./assets/athmosphere/110_Vocal_FSharpm.wav";
import athmosphere_Vocal_Gm from "./assets/athmosphere/128_Vocal_Gm.wav";
import athmosphere_Vocal_Em from "./assets/athmosphere/120_Vocal_Em.wav";
import athmosphere_Vocal_Am from "./assets/athmosphere/160_Vocal_Am.wav";

import athmosphere_Piano_Am from "./assets/athmosphere/160_Piano_Sky_Am.wav";
import athmosphere_Piano_Gm from "./assets/athmosphere/128_Piano_Peace_Gm.wav";
import athmosphere_Piano_Em from "./assets/athmosphere/120_Piano_Celestial_Em.wav";
import athmosphere_Piano_FSharpm from "./assets/athmosphere/110_Piano_Free_FSharpm.wav";

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
            <IonAccordion value='first'>
                <IonItem slot="header">
                    <IonLabel>Lofi</IonLabel>
                </IonItem>
                <div slot='content'>
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

                    <IonRange mode='ios' pin={true} pinFormatter={(value: number) => `${value}%`}
                        onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Background_Harp_Am, event.detail, backgroundHarpAm)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>
                </div>
            </IonAccordion>

            <IonAccordion value='second'>
                <IonItem slot="header">
                    <IonLabel>Athmosphere</IonLabel>
                </IonItem>
                <div slot='content'>
                    <IonRange mode='ios' label='Vocals F#m' labelPlacement='fixed' pin={true} pinFormatter={(value: number) => `${value}%`}
                        onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Athmosphere_Vocal_Fsharp, event.detail, athmosphere_Vocal_Fsharpm)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>

                    <IonRange mode='ios' label='Em' labelPlacement='fixed' pin={true} pinFormatter={(value: number) => `${value}%`}
                        onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Athmosphere_Vocal_Em, event.detail, athmosphere_Vocal_Em)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>

                    <IonRange mode='ios' label='Am' labelPlacement='fixed' pin={true} pinFormatter={(value: number) => `${value}%`}
                        onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Athmosphere_Vocal_Am, event.detail, athmosphere_Vocal_Am)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>

                    <IonRange mode='ios' label='Gm' labelPlacement='fixed' pin={true} pinFormatter={(value: number) => `${value}%`}
                        onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Athmosphere_Vocal_Gm, event.detail, athmosphere_Vocal_Gm)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>

                    <IonRange mode='ios' label='Piano F#m' labelPlacement='fixed' pin={true} pinFormatter={(value: number) => `${value}%`}
                        onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Athmosphere_Piano_FSharpm, event.detail, athmosphere_Piano_FSharpm)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>

                    <IonRange mode='ios' label='Em' labelPlacement='fixed' pin={true} pinFormatter={(value: number) => `${value}%`}
                        onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Athmosphere_Piano_Em, event.detail, athmosphere_Piano_Em)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>

                    <IonRange mode='ios' label='Am' labelPlacement='fixed' pin={true} pinFormatter={(value: number) => `${value}%`}
                        onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Athmosphere_Piano_Am, event.detail, athmosphere_Piano_Am)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>

                    <IonRange mode='ios' label='Gm' labelPlacement='fixed' pin={true} pinFormatter={(value: number) => `${value}%`}
                        onIonChange={event => onVolumeChange(AvailableBackgroundTracks.Athmosphere_Piano_Gm, event.detail, athmosphere_Piano_Gm)}>
                        <IonIcon slot="start" icon={volumeOffOutline} />
                        <IonIcon slot="end" icon={volumeHighOutline} />
                    </IonRange>
                </div>
            </IonAccordion>
        </IonAccordionGroup>

    );
}

export default BackgroundTracks;