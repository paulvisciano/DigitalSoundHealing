import { IonButton } from "@ionic/react";
import React, {
  useCallback,
  useRef,
  useState,
  useMemo,
} from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import TimelinePlugin from "wavesurfer.js/dist/plugins/timeline";

type WavePlayerProps = {
  src : string,
  waveColor : string,
  progressColor : string,
  cursorColor : string
}

const WavePlayer: React.FC<{props : WavePlayerProps}> = ({ props }) => {
  const [timelineVis, setTimelineVis] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const plugins = useMemo((): any => {
    return [
      timelineVis && {
        key: "top-timeline",
        plugin: TimelinePlugin,
        options: {
          height: 30,
          insertPosition: "beforebegin",
          style: {
            color: "green",
          },
        },
      },
      timelineVis && {
        key: "bottom-timeline",
        plugin: TimelinePlugin,
        options: {
          height: 20,
          style: {
            color: "#6A3274",
          },
        },
      },
    ].filter(Boolean);
  }, [timelineVis]);

  const toggleTimeline = useCallback(() => {
    setTimelineVis(!timelineVis);
  }, [timelineVis]);

  const wavesurferRef: any = useRef();

  const handleWSMount = useCallback(
    (waveSurfer: any) => {
      wavesurferRef.current = waveSurfer;

      if (wavesurferRef.current) {
        wavesurferRef.current.load(props.src);

        wavesurferRef.current.on("ready", () => {
          console.log("WaveSurfer is ready");
          setIsLoaded(true);
        });

        wavesurferRef.current.on("click", () => {
          wavesurferRef.current.play();
        });
      }
    },
    [],
  );

  const play = useCallback(() => {
    wavesurferRef.current.playPause();
  }, []);

  const setZoom50 = () => {
    wavesurferRef.current.zoom(200);
  };

  return (
    <div>
      <WaveSurfer
        plugins={plugins}
        barWidth={3}
        onMount={handleWSMount}
        container="#waveform"
        {...props}>
        <WaveForm id="waveform" />
        <div id="timeline" />
      </WaveSurfer>
      <IonButton onClick={play}>Play / Pause</IonButton>
      <IonButton onClick={toggleTimeline}>Toggle timeline</IonButton>
      <IonButton onClick={setZoom50}>zoom 50%</IonButton>
    </div>
  );
}

export default WavePlayer;