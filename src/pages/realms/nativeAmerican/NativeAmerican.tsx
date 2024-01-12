import { Chakra, ChakraEnum, ChakraInterface } from "components/Chakra";
import ChakraPlayer from "components/chakraPlayer/ChakraPlayer";
import { AvailableVocals } from "components/soundPlayer/SoundPlayer";
import { PositionEnum } from "positions/PositionsEnum";
import { EffectCube, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import "./NativeAmerican.css";

const NativeAmericanRealm: React.FC = () => {

  let crownChakra = new Chakra(ChakraEnum.Crown);
  crownChakra.position = PositionEnum.None;

  let throatChakra = new Chakra(ChakraEnum.Throat);
  throatChakra.position = PositionEnum.None;

  let sacralChakra = new Chakra(ChakraEnum.Sacral);
  sacralChakra.position = PositionEnum.None;

  let thirdEyeChakra = new Chakra(ChakraEnum.ThirdEye);
  thirdEyeChakra.position = PositionEnum.None;

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
        <ChakraPlayer key={`${crownChakra.name}_${crownChakra.note}`} vocals={AvailableVocals.FrenchDm} chakra={crownChakra} />
      </SwiperSlide>

      <SwiperSlide>
        <ChakraPlayer key={`${throatChakra.name}_${throatChakra.note}`} vocals={AvailableVocals.ChildPlay} chakra={throatChakra} />
      </SwiperSlide>

      <SwiperSlide>
        <ChakraPlayer key={`${sacralChakra.name}_${sacralChakra.note}`} vocals={AvailableVocals.IAmHere} chakra={sacralChakra} />
      </SwiperSlide>

      <SwiperSlide>
      <ChakraPlayer key={`${thirdEyeChakra.name}_${thirdEyeChakra.note}`} vocals={AvailableVocals.IAmHere} chakra={thirdEyeChakra} />
      </SwiperSlide>
    </Swiper>
    
  </>)
}

export default NativeAmericanRealm;