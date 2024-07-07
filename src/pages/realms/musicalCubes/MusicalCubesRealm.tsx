import "./MusicalCubesRealm.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { MusicalCubeSound } from "./sounds/MusicalCubeSounds";

const MusicalCubesRealm: React.FC = () => {
  return (<>
    <div>
      <MusicalCube cubeId={0} label="Guitar" sounds={[MusicalCubeSound.guitarB, MusicalCubeSound.melodyB, MusicalCubeSound.vocalsAm, MusicalCubeSound.brassAm]} />

      <MusicalCube cubeId={1} label="Vocals" sounds={[MusicalCubeSound.vocalsAm, MusicalCubeSound.melodyB, MusicalCubeSound.vocalsAm, MusicalCubeSound.brassAm]} />

      <MusicalCube cubeId={2} label="Brass" sounds={[MusicalCubeSound.brassAm, MusicalCubeSound.melodyB, MusicalCubeSound.vocalsAm, MusicalCubeSound.brassAm]} />
    </div>
  </>)
}

export default MusicalCubesRealm;  