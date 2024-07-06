import "./MusicalCubes.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { MusicalCubeSounds } from "./sounds/MusicalCubeSounds";

const MusicalCubesRealm: React.FC = () => {
  return (<>

    <div style={{ marginLeft: 500, marginTop: 200 }}>
      <div style={{ display : "inline-block", width: 200 }}>
        <MusicalCube keyzz={0} sounds={[MusicalCubeSounds.guitarB, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm, MusicalCubeSounds.brassAm]} />
      </div>

      <div style={{ display : "inline-block", width: 200, marginLeft : 100}}>
        <MusicalCube keyzz={1} sounds={[MusicalCubeSounds.guitarB, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm, MusicalCubeSounds.brassAm]} />
      </div>
    </div>


  </>)
}

export default MusicalCubesRealm;  