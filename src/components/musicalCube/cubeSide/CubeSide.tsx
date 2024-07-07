import { IonGrid, IonRow, IonCol } from '@ionic/react';
import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import CubeSideToolbar from '../toolbar/Toolbar';
import { MusicalCubeSound } from 'pages/realms/musicalCubes/sounds/MusicalCubeSounds';
import "./CubeSide.css";

interface CubeSideOptions {
    cubeKey: number,
    sideKey: number,
    sound: MusicalCubeSound,
};

export const CubeSide: React.FC<{ options: CubeSideOptions; }> = ({ options }) => {
    const waveFormUniqueId = `cube-${options.cubeKey}-side-${options.sideKey}-waveform`;
    const wavesurferRef: any = useRef();
    let [loop, setLoop] = useState(true);
    let [showToolbar, setShowToolbar] = useState(false);

    const handleWSMount = useCallback(
        (waveSurfer: any) => {
            wavesurferRef.current = waveSurfer;

            if (wavesurferRef.current) {
                wavesurferRef.current.setVolume(0.2);
                wavesurferRef.current.load(options.sound);

                //Customize the way the click event is handled to be able to seek vertically
                wavesurferRef.current.renderer.parent.addEventListener("click", (e: any) => {
                    var rect = wavesurferRef.current.renderer.parent.getBoundingClientRect();
                    let minY = rect.top;
                    let maxY = rect.bottom;
                    let newVal = 1 - ((e.clientY - minY) / (maxY - minY));

                    wavesurferRef.current.seekTo((newVal));
                }, false);

                wavesurferRef.current.on("click", (e: number) => {
                    wavesurferRef.current.play();

                    setShowToolbar(true);

                    setTimeout(() => setShowToolbar(false), 5000);
                });
            }
        },
        [options, loop]
    );

    useEffect(() => {
        let unSub = wavesurferRef.current.on("finish", () => {
            if (loop) {
                wavesurferRef.current.seekTo(0);
                wavesurferRef.current.play();
            }
        });

        return () => unSub();
    }, [loop]);

    return (
        <div className={`cube-side side-${options.sideKey}`}>
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
