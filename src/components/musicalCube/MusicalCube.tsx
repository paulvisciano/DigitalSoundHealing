import './MusicalCube.css'
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import { EffectCube, Navigation } from 'swiper/modules';
import { MusicalCubeSounds } from 'pages/realms/musicalCubes/sounds/MusicalCubeSounds';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import CubeSideToolbar from './toolbar/Toolbar';
 
interface CubeSideOptions {
    key: number,
    sound: MusicalCubeSounds,
};

const CubeSide: React.FC<{ options: CubeSideOptions }> = ({ options }) => {
    const waveFormUniqueId = `waveform-${options.key}`;
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
                    var rect = wavesurferRef.current.renderer.parent.getBoundingClientRect()
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
        <>
            <IonGrid>
                <IonRow>
                    <IonCol>
                            <WaveSurfer
                                height={203}
                                width={204}
                                barWidth={0.1}
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
                    </IonCol>
                </IonRow>
            </IonGrid>

            {showToolbar && <CubeSideToolbar loop={loop} setLoop={setLoop} />}
        </>
    )
};

const MusicalCube: React.FC<{ sounds: Array<MusicalCubeSounds> }> = ({ sounds }) => {
    return (
        <div key="musical-cube">
            <Swiper
                className='musical-cube-swiper'
                effect={'cube'}
                loop={true}
                navigation={true}
                cubeEffect={{
                    shadow: true,
                    shadowOffset: 30,
                    shadowScale: 0.85,
                }}
                onInit={(swiper: SwiperType) => {
                    //Force update to remove dark background from slide
                    setTimeout(() => {
                        swiper.update();
                    });
                }}
                onSwiper={(swiper: SwiperType) => {
                    //Force update to remove dark background from slide
                    setTimeout(() => {
                        swiper.update();
                    });
                }}
                modules={[EffectCube, Navigation]}
            >
                {sounds.map((sound, index) =>
                    <SwiperSlide key={`cube-slide-${index}`}>
                        <CubeSide options={{ key: index, sound: sound }} />
                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    );
}

export default MusicalCube;