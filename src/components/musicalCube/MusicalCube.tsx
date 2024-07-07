import './MusicalCube.css';
import './SwiperOverrides.css';
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import { EffectCube, Navigation } from 'swiper/modules';
import { MusicalCubeSound } from 'pages/realms/musicalCubes/sounds/MusicalCubeSounds';

import React from "react";
import { CubeSide } from './cubeSide/CubeSide';

interface Size {
    height: number;
    width: number;
}

interface CubeOptions {
    cubeId: number;
    label: string;
    size?: Size;
    sounds: Array<MusicalCubeSound>;
}

const MusicalCube: React.FC<CubeOptions> = ({ cubeId: cubeId, label: label, size = { height: 200, width: 200 }, sounds }) => {
    return (
        <div className={`musical-cube musical-cube-${cubeId}`}>
            <p className='musical-cube-label'>{label}</p>

            <Swiper
                className={`musical-cube-swiper-${cubeId}`}
                style={{ height: size.height, width: size.width }}
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
                            <CubeSide options={{ cubeKey: cubeId, sideKey: index, sound: sound }} />
                        </SwiperSlide>
                    )}

            </Swiper>
        </div>
    );
}

export default MusicalCube;