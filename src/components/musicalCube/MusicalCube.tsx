import './MusicalCube.css'
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import { EffectCube, Navigation, Pagination } from 'swiper/modules';
import { MusicalCubeSounds } from 'pages/realms/musicalCubes/sounds/MusicalCubeSounds';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import React, {
    useCallback,
    useRef,
} from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";

interface CubeSideOptions {
    key: number,
    sound: MusicalCubeSounds,
};

const CubeSide: React.FC<{ options: CubeSideOptions }> = ({ options }) => {
    const wavesurferRef: any = useRef();

    const waveFormUniqueId = `waveform-side-${options.key}`;

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
                });
            }
        },
        []
    );

    const playPause = () => {
        wavesurferRef?.current?.playPause();
    }

    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <div id="wavesurfer-contain">
                        <WaveSurfer
                            height={203}
                            width={204}
                            barWidth={0.1}
                            waveColor={[
                                "#ffe0b2",
                                "#fbc02d",
                                "#ffe0b2",
                            ]}
                            progressColor={[
                                "#e65100",
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
    )
};

const MusicalCube: React.FC<{ sounds: Array<MusicalCubeSounds> }> = ({ sounds }) => {
    return (
        <div key="musical-cube">
            <Swiper
                className='musical-cube-swiper'
                effect={'cube'}
                grabCursor={true}
                loop={true}
                navigation={true}
                cubeEffect={{
                    shadow: true,
                    shadowOffset: 30,
                    shadowScale: 0.85,
                }}
                pagination={{
                    clickable: true,
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
                        <CubeSide options={{ key: index, sound: sound }}></CubeSide>
                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    );
}

export default MusicalCube;