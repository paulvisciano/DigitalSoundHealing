import React, {
  useCallback,
  useRef,
} from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import { ChakraEnum } from "components/Chakra";
import "./SoundPlayer.css";

import justADreamVocal from "../../assets/sounds/vocals/justADream.wav";
import noTomorrowVocal from "../../assets/sounds/vocals/noTomorrow.wav";
import childPlayVocal from "../../assets/sounds/vocals/childplay_Am.wav";
import chillVocal from "../../assets/sounds/vocals/chill_F.wav";
import iAmHereVocal from "../../assets/sounds/vocals/iAmHere.wav";
import iKnowNothing from "../../assets/sounds/vocals/iKnowNothing.wav";
import frenchDm from "../../assets/sounds/vocals/french_Dm.wav";
import frenchEm from "../../assets/sounds/vocals/french_Em.wav";
import { nanoid } from "@reduxjs/toolkit";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

type SoundPlayerProps = {
  src: any,
  chakraName: ChakraEnum,
  icon?: InstrumentIcons,
  iconPosition?: IconPosition
}

export enum AvailableVocals {
  JustADream = justADreamVocal,
  NoTomorrow = noTomorrowVocal,
  ChildPlay = childPlayVocal,
  Chill = chillVocal,
  IAmHere = iAmHereVocal,
  IKnowNothing = iKnowNothing,
  FrenchDm = frenchDm,
  FrenchEm = frenchEm,
}

export enum InstrumentIcons {
  Guitar = "guitar",
  Sax = "sax",
  GlockenSpiel = "glockenSpiel",
  Flute = "flute"
}

export enum IconPosition {
  Top = "top",
  Bottom = "bottom"
}

type PlayerColors = {
  waveColor: string,
  progressColor: string,
  cursorColor: string
}

//This can probably be moved somewhere else
const getColorsBasedOnChakraName = (chakra: ChakraEnum): PlayerColors => {
  switch (chakra) {
    case ChakraEnum.Heart:
      return { waveColor: "#388e3c", progressColor: "#1b5e20", cursorColor: "transparent" }
    case ChakraEnum.Solar:
      return { waveColor: "#fbc02d", progressColor: "#f57f17", cursorColor: "transparent" }
    case ChakraEnum.ThirdEye:
      return { waveColor: "#1976d2", progressColor: "#0d47a1", cursorColor: "transparent" }
    case ChakraEnum.Crown:
      return { waveColor: "#7b1fa2", progressColor: "#4a148c", cursorColor: "transparent" }
    case ChakraEnum.Sacral:
      return { waveColor: "#fb8c00", progressColor: "#e65100", cursorColor: "transparent" }
    case ChakraEnum.Throat:
      return { waveColor: "#1e88e5", progressColor: "#0d47a1", cursorColor: "transparent" }

    default:
      return { waveColor: "red", progressColor: "green", cursorColor: "transparent" }
  }
};

const SoundPlayer: React.FC<{ props: SoundPlayerProps }> = ({ props }) => {
  const wavesurferRef: any = useRef();
  const colors = getColorsBasedOnChakraName(props.chakraName);
  const waveFormUniqueId = `waveform-${nanoid()}`;

  const handleWSMount = useCallback(
    (waveSurfer: any) => {
      wavesurferRef.current = waveSurfer;

      if (wavesurferRef.current) {
        wavesurferRef.current.setVolume(0.2);
        wavesurferRef.current.load(props.src);
        wavesurferRef.current.on("click", () => {
          wavesurferRef.current.play();
        });
      }
    },
    []
  );

  return (
    <div className={`soundPlayer-container`}>

    <IonGrid>
      {props.icon && props.iconPosition && props.iconPosition === IconPosition.Top &&
        <IonRow>
          <IonCol>
            <div className={`soundPlayer-icon ${props.icon}`} />
          </IonCol>
        </IonRow>}

      <IonRow>
        <IonCol>
            <WaveSurfer
              height={60}
              width={300}
              barWidth={3}
              onMount={handleWSMount}
              container={`#${waveFormUniqueId}`}
              {...colors}>

              <WaveForm id={waveFormUniqueId} />

            </WaveSurfer>
        </IonCol>
      </IonRow>

      {props.icon && props.iconPosition && props.iconPosition === IconPosition.Bottom &&
        <IonRow>
          <IonCol>
            <div className={`soundPlayer-icon ${props.icon}`} />
          </IonCol>
        </IonRow>}
    </IonGrid>
    </div>
  );
}

export default SoundPlayer;