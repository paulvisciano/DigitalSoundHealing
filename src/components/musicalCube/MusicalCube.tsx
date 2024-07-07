import './MusicalCube.css'
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import { EffectCube, Navigation } from 'swiper/modules';
import { MusicalCubeSounds } from 'pages/realms/musicalCubes/sounds/MusicalCubeSounds';

import React from "react";
import { CubeSide } from './cubeSide/CubeSide';

export interface CubeSideOptions {
    cubeKey: number,
    key: number,
    sound: MusicalCubeSounds,
};

const MusicalCube: React.FC<{ keyzz: number, sounds: Array<MusicalCubeSounds> }> = ({ keyzz, sounds }) => {
    return (
        <div style={{ height: 200, width: 200 }}>
            <Swiper
                className={`musical-cube-swiper-${keyzz}`}
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
                {
                    sounds.map((sound, index) =>
                        <SwiperSlide key={`cube-slide-${index}`}>
                            <CubeSide options={{ cubeKey: keyzz, key: index, sound: sound }} />
                        </SwiperSlide>
                    )}

            </Swiper>
        </div>
    );
}

export default MusicalCube;