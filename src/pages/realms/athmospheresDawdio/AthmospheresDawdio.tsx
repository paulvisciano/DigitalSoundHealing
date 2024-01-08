import { Chakra, ChakraEnum, ChakraInterface } from "components/Chakra";
import ChakraPlayer from "components/chakraPlayer/ChakraPlayer";
import { AvailableVocals } from "components/vocalsPlayer/VocalsPlayer";
import { PositionEnum } from "positions/PositionsEnum";
import { EffectCube, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import "./AthmospheresDawdio.css";
import { AthmosphereVocals } from "./vocals/AthmosphereVocals";

const AthmospheresDawdioRealm: React.FC = () => {

  let heartChakra = new Chakra(ChakraEnum.Heart);
  heartChakra.position = PositionEnum.None;

  let solarChakra = new Chakra(ChakraEnum.Solar);
  solarChakra.position = PositionEnum.None;

  let thirdEyeChakra = new Chakra(ChakraEnum.ThirdEye);
  thirdEyeChakra.position = PositionEnum.None;

  let throatChakra = new Chakra(ChakraEnum.Throat);
  throatChakra.position = PositionEnum.None;

  
  return (<>
    <Swiper
      className='instrument-swiper'
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        shadowOffset: 50,
        shadowScale: 0.94,
      }}
      onSwiper={(swiper: SwiperType) => {
        console.log('Force refresh');
        setTimeout(() => {
          swiper.update();
        });
      }}
      modules={[EffectCube, Pagination]}
    >
      <SwiperSlide>
        <ChakraPlayer key={`${heartChakra.name}_${heartChakra.note}`} vocals={AthmosphereVocals.FreeFSharpm} chakra={heartChakra} />
      </SwiperSlide>

      <SwiperSlide>
        <ChakraPlayer key={`${solarChakra.name}_${solarChakra.note}`} vocals={AthmosphereVocals.AltEm} chakra={solarChakra} />
      </SwiperSlide>

      <SwiperSlide>
       <ChakraPlayer key={`${thirdEyeChakra.name}_${thirdEyeChakra.note}`} vocals={AthmosphereVocals.DeepAm} chakra={thirdEyeChakra} />
      </SwiperSlide>

      <SwiperSlide>
        <ChakraPlayer key={`${throatChakra.name}_${throatChakra.note}`} vocals={AthmosphereVocals.HeavenlyGm} chakra={throatChakra} />
      </SwiperSlide>

    </Swiper>
    
  </>)
}

export default AthmospheresDawdioRealm;