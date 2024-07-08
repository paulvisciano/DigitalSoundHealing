import { IonGrid, IonRow, IonCol } from '@ionic/react';
import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import { nanoid } from "@reduxjs/toolkit";
import CubeSideToolbar from '../toolbar/Toolbar';
import { CubeSound } from 'pages/realms/musicalCubes/sounds/CubeSound';
import { useCustomWavesurferClick } from './hooks';
import "./CubeSide.css";

interface SideOptions {
    id: string;
    sound: CubeSound,
};

export const CubeSide: React.FC<SideOptions> = ({ id: id, sound }) => {
    //Each waveform needs to have a unique id
    const waveFormUniqueId = `waveform-${id}`;
    const wavesurferRef: any = useRef();
    let [loop, setLoop] = useState(true);
    let [showToolbar, setShowToolbar] = useState(false);

    const handleWSMount = useCallback(
        (waveSurfer: any) => {
            wavesurferRef.current = waveSurfer;
            wavesurferRef.current?.load(sound);
        }, []);

    useEffect(() => {
        const unsubClick = wavesurferRef.current.on("click", (e: number) => {
            setShowToolbar(true);

            setTimeout(() => setShowToolbar(false), 5000);
        });

        const unsubFinish = wavesurferRef.current.on("finish", () => {
            if (loop) {
                wavesurferRef.current.seekTo(0);
                wavesurferRef.current.play();
            }
        });

        return () => {
            unsubClick();
            unsubFinish();
        };
    }, [loop]);

    useCustomWavesurferClick(wavesurferRef);

    return (
        <div className={`cube-side`}>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <div className='wavesurfer-custom-wrapper'>
                            <WaveSurfer
                                height={196}
                                width={196}
                                barWidth={0.5}

                                //TODO: Get these colors from colors.css
                                //TODO : Pass them in as params
                                waveColor={[
                                    "#1976d2",
                                    "#2196f3",
                                    "#1976d2",
                                ]}
                                progressColor={[
                                    "#0d47a1",
                                ]}
                                onMount={handleWSMount}
                                container={`#${waveFormUniqueId}`}
                            >
                                <WaveForm id={waveFormUniqueId} />
                            </WaveSurfer>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>

            {showToolbar && <CubeSideToolbar loop={loop} setLoop={setLoop} />}
        </div>
    );
};
