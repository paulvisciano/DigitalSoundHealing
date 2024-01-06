import { Chakra, ChakraEnum, ChakraInterface } from "components/Chakra";
import ChakraPlayer from "components/chakraPlayer/ChakraPlayer";
import { AvailableVocals } from "components/vocalsPlayer/VocalsPlayer";
import { PositionEnum } from "positions/PositionsEnum";
import { EffectCube, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import "./NativeAmerican.css";

const NativeAmericanRealm: React.FC = () => {

    let crownChakra = new Chakra(ChakraEnum.Crown);
    crownChakra.position = PositionEnum.None;
  
    let heartChakra = new Chakra(ChakraEnum.Sacral);
    heartChakra.position = PositionEnum.None;
  
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
              <SwiperSlide className='mr-swiper-slide'>
                <ChakraPlayer key={`${heartChakra.name}_${heartChakra.note}`} vocals={AvailableVocals.IKnowNothing} chakra={heartChakra} />
              </SwiperSlide>

              <SwiperSlide className='mr-swiper-slide'>
                <ChakraPlayer key={`${crownChakra.name}_${crownChakra.note}`} vocals={AvailableVocals.FrenchDm} chakra={crownChakra} />
              </SwiperSlide>

              <SwiperSlide className='mr-swiper-slide'>
                <ChakraPlayer key={`${crownChakra.name}_${crownChakra.note}`} vocals={AvailableVocals.IAmHere} chakra={crownChakra} />
              </SwiperSlide>

              <SwiperSlide className='mr-swiper-slide'>
                <ChakraPlayer key={`${throatChakra.name}_${throatChakra.note}`} vocals={AvailableVocals.ChildPlay} chakra={throatChakra} />
              </SwiperSlide>
            </Swiper>

</>)
}

export default NativeAmericanRealm;