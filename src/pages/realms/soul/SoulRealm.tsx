import { Chakra, ChakraEnum, ChakraInterface } from "components/Chakra";
import ChakraPlayer from "components/chakraPlayer/ChakraPlayer";
import VocalsPlayer, { AvailableVocals } from "components/vocalsPlayer/VocalsPlayer";
import { PositionEnum } from "positions/PositionsEnum";
import { EffectCube, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import "./SoulRealm.css";
import { SoulVocals } from "./vocals/SoulVocals";
import { IonCol, IonGrid, IonLabel, IonRow } from "@ionic/react";

import flute from "./instruments/130_flute_Dmin.wav"
import glockenSpiel from "./instruments/130_glockenspiel_Dmin.wav"
import sax from "./instruments/130_sax_stabs_Dmin.wav"
import cleanGuitar from "./instruments/130_guitar_clean.wav"
import distortedGuitar from "./instruments/130_guitar_distorted_Dmin.wav"
import leadGuitar from "./instruments/130_guitar_lead_Dmin.wav"

const SoulRealm: React.FC = () => {
  let crownChakra = new Chakra(ChakraEnum.Crown);
  crownChakra.position = PositionEnum.None;


  return (<>
    <Swiper
      className='soul-swiper'
      loop={true}
      navigation={true}

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

        <IonGrid className="header-vocal-player">
          <IonRow>
            <IonCol>
              <VocalsPlayer props={{ src: sax, chakraName: crownChakra.name }} />
              <IonLabel>Sax</IonLabel>

            </IonCol>
            <IonCol>
              <VocalsPlayer props={{ src: flute, chakraName: crownChakra.name }} />
              <IonLabel>Flute</IonLabel>
            </IonCol>
            <IonCol>
              <VocalsPlayer props={{ src: glockenSpiel, chakraName: crownChakra.name }} />
              <IonLabel>Glockenspiel</IonLabel>
            </IonCol>

          </IonRow>
        </IonGrid>

              <ChakraPlayer key={`${crownChakra.name}_${crownChakra.note}`} vocals={SoulVocals.SouldDm} chakra={crownChakra} />

        <IonGrid className="footer-vocal-player">
          <IonRow>
            <IonLabel>Guitar</IonLabel>
            <IonCol>
              <VocalsPlayer props={{ src: cleanGuitar, chakraName: crownChakra.name }} />

            </IonCol>
            <IonCol>
              <VocalsPlayer props={{ src: distortedGuitar, chakraName: crownChakra.name }} />

            </IonCol>
            <IonCol>
              <VocalsPlayer props={{ src: leadGuitar, chakraName: crownChakra.name }} />
            </IonCol>

          </IonRow>
        </IonGrid>
      </SwiperSlide>
    </Swiper>

  </>)
}

export default SoulRealm;