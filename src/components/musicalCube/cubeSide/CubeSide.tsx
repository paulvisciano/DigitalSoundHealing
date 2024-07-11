import { IonGrid, IonRow, IonCol } from '@ionic/react';
import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import CubeSideToolbar from '../toolbar/Toolbar';
import { CubeSound } from 'pages/realms/musicalCubes/sounds/CubeSound';
import { useCustomWavesurferClick } from './hooks';
import "./CubeSide.css";
import { Size } from '../interfaces/Size';

interface SideOptions {
    id: string;
    size: Size;
    sound: CubeSound,
    setSharedTrackTime: any;
    getSharedTrackTime: any;
};

export const CubeSide: React.FC<SideOptions> = ({ id, size, sound, ...props }) => {
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

    const triggerSync = () => {
        const sharedPosition = props.getSharedTrackTime();

        if (sharedPosition) {
            wavesurferRef.current.setTime(sharedPosition);
            wavesurferRef.current.play();
        }
        else {
            setInterval(() => {
                const trackPosition = wavesurferRef.current.getCurrentTime();

                props.setSharedTrackTime(trackPosition);
            }, 100);
        }
    }


    useEffect(() => {
        const unsubClick = wavesurferRef.current.on("click", (e: number) => {
            setShowToolbar(true);
            wavesurferRef.current.seekTo(0);
            wavesurferRef.current.play();
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

    // useCustomWavesurferClick(wavesurferRef);

    return (
        <div className={`cube-side`}>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <div className='wavesurfer-custom-wrapper'>
                            <WaveSurfer
                                height={size.height - 4}
                                width={size.width - 4}
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
                                dragToSeek={false}
                                onMount={handleWSMount}
                                container={`#${waveFormUniqueId}`}
                            >
                                <WaveForm id={waveFormUniqueId} />
                            </WaveSurfer>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>

            {showToolbar && <CubeSideToolbar loop={loop} setLoop={setLoop} triggerSync={triggerSync} />}
        </div>
    );
};
