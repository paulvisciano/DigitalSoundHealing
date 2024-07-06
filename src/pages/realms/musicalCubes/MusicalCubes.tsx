import "./MusicalCubes.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { MusicalCubeSounds } from "./sounds/MusicalCubeSounds";

const MusicalCubesRealm: React.FC = () => {
  return (<>
      <MusicalCube sounds={[MusicalCubeSounds.guitarB, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm]} />
      {/* <MusicalCube sounds ={[MusicalCubeSounds.guitarB, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm]} /> */}
      {/* <MusicalCube sounds={[MusicalCubeSounds.guitarB, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm]} /> */}
{/* 
    <div className="bottom-left">
      <MusicalCube sounds={[MusicalCubeSounds.guitarB, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm]} />
    </div>
    <div className="center">
      <MusicalCube sounds={[MusicalCubeSounds.guitarB, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm]} />
    </div>
    <div className="bottom-right">
      <MusicalCube sounds={[MusicalCubeSounds.guitarB, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm]} />
    </div> */}
  </>)
}

export default MusicalCubesRealm; 