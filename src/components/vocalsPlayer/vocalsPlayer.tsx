import React, {
  useCallback,
  useRef,
} from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import { ChakraEnum } from "components/Chakra";
import "./VocalsPlayer.css";

import justADreamVocal from "../../assets/sounds/vocals/justADream.wav";
import noTomorrowVocal from "../../assets/sounds/vocals/noTomorrow.wav";
import childPlayVocal from "../../assets/sounds/vocals/childplay_Am.wav";
import chillVocal from "../../assets/sounds/vocals/chill_F.wav";
import iAmHereVocal from "../../assets/sounds/vocals/iAmHere.wav";
import iKnowNothing from "../../assets/sounds/vocals/iKnowNothing.wav";
import frenchDm from "../../assets/sounds/vocals/french_Dm.wav";
import frenchEm from "../../assets/sounds/vocals/french_Em.wav";

type VocalsPlayerProps = {
  src: AvailableVocals,
  chakraName: ChakraEnum
}

export enum AvailableVocals {
  JustADream = justADreamVocal,
  NoTomorrow = noTomorrowVocal,
  ChildPlay = childPlayVocal,
  Chill = chillVocal,
  IAmHere = iAmHereVocal,
  IKnowNothing = iKnowNothing,
  FrenchDm = frenchDm,
  FrenchEm = frenchEm
}

type PlayerColors = {
  waveColor: string,
  progressColor: string,
  cursorColor: string
}

//This can probably be moved somewhere else
const getColorsBasedOnChakraName = (chakra: ChakraEnum): PlayerColors => {
  switch (chakra) {
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

const VocalsPlayer: React.FC<{ props: VocalsPlayerProps }> = ({ props }) => {
  const wavesurferRef: any = useRef();
  const colors = getColorsBasedOnChakraName(props.chakraName);

  const handleWSMount = useCallback(
    (waveSurfer: any) => {
      wavesurferRef.current = waveSurfer;

      if (wavesurferRef.current) {
        wavesurferRef.current.load(props.src);
        wavesurferRef.current.on("click", () => {
          wavesurferRef.current.play();
        });
      }
    },
    []
  );

  return (
    <div className={`vocalsPlayer-container`}>
      <WaveSurfer
        height={60}
        width={300}
        barWidth={3}
        onMount={handleWSMount}
        container={`#waveform-${props.chakraName}`}
        {...colors}>

        <WaveForm id={`waveform-${props.chakraName}`} />

      </WaveSurfer>
    </div>
  );
}

export default VocalsPlayer;