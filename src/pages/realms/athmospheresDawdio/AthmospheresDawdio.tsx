import { Chakra, ChakraEnum, ChakraInterface } from "components/Chakra";
import ChakraPlayer from "components/chakraPlayer/ChakraPlayer";
import VocalsPlayer, { AvailableVocals } from "components/vocalsPlayer/VocalsPlayer";
import { PositionEnum } from "positions/PositionsEnum";
import { EffectCube, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import "./AthmospheresDawdio.css";
import { AthmosphereVocals } from "./vocals/AthmosphereVocals";
import { IonCol, IonGrid, IonLabel, IonRow } from "@ionic/react";

import celloLowGm from "./instruments/Cello_Low_Gm.wav";
import cello_Mid_High_Gm from "./instruments/Cello_Mid_High_Gm.wav";
import cello_Full_Gm from "./instruments/Cello_Full_Gm.wav";
import cello_Ensemble_Gm from "./instruments/Cello_Ensemble_Gm.wav";

import violinGm from "./instruments/Violin_Gmin.wav";

import piano_Peace_Gm from "./instruments/Piano_Peace_Gm.wav";
import piano_Uplifting_Gm from "./instruments/Piano_Uplifting_Gm.wav";
import piano_Main_Gm from "./instruments/Piano_Main_Gm.wav";


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
      className='athmosphere-swiper'
      effect={'cube'}
      grabCursor={true}
      loop={true}
      navigation={true}
      cubeEffect={{
        shadow: true,
        shadowOffset: 120,
        shadowScale: 0.5,
      }}
      pagination={{
        clickable: true,
        
      }}
      onSwiper={(swiper: SwiperType) => {
        console.log('Force refresh');
        setTimeout(() => {
          swiper.update();
        });
      }}
      modules={[EffectCube, Navigation, Pagination]}
    >

      <SwiperSlide className="throat-slide">
        <IonGrid >
          <IonRow class="ion-align-items-center text-center">
            <IonCol size="3">
              <IonLabel >Strings</IonLabel>
              <VocalsPlayer props={{ src: violinGm, chakraName: throatChakra.name }} />

              <VocalsPlayer props={{ src: celloLowGm, chakraName: throatChakra.name }} />
              <VocalsPlayer props={{ src: cello_Mid_High_Gm, chakraName: throatChakra.name }} />
              <VocalsPlayer props={{ src: cello_Full_Gm, chakraName: throatChakra.name }} />
              <VocalsPlayer props={{ src: cello_Ensemble_Gm, chakraName: throatChakra.name }} />
            </IonCol>

            <IonCol size="6">
              <ChakraPlayer key={`${throatChakra.name}_${throatChakra.note}`} vocals={AthmosphereVocals.HeavenlyGm} chakra={throatChakra} />
            </IonCol>

            <IonCol size="3">

              <IonLabel>Piano</IonLabel>

              <VocalsPlayer props={{ src: piano_Peace_Gm, chakraName: throatChakra.name }} />
              <VocalsPlayer props={{ src: piano_Uplifting_Gm, chakraName: throatChakra.name }} />
              <VocalsPlayer props={{ src: piano_Main_Gm, chakraName: throatChakra.name }} />

            </IonCol>
          </IonRow>
        </IonGrid>
      </SwiperSlide>

      <SwiperSlide className="heart-slide">
        <ChakraPlayer key={`${heartChakra.name}_${heartChakra.note}`} vocals={AthmosphereVocals.FreeFSharpm} chakra={heartChakra} />
      </SwiperSlide>

      <SwiperSlide className="solar-slide">
        <ChakraPlayer key={`${solarChakra.name}_${solarChakra.note}`} vocals={AthmosphereVocals.AltEm} chakra={solarChakra} />
      </SwiperSlide>

      <SwiperSlide className="thirdeye-slide">
        <ChakraPlayer key={`${thirdEyeChakra.name}_${thirdEyeChakra.note}`} vocals={AthmosphereVocals.DeepAm} chakra={thirdEyeChakra} />
      </SwiperSlide>

    </Swiper>

  </>)
}

export default AthmospheresDawdioRealm;