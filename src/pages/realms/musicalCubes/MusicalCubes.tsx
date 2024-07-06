import "./MusicalCubes.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { MusicalCubeSounds } from "./sounds/MusicalCubeSounds";

const MusicalCubesRealm: React.FC = () => {
  return (<>

    <div style={{ marginLeft: 300, marginTop: 300 }}>
      <div style={{ display : "inline-block", width: 200 }}>
        <MusicalCube keyzz={0} sounds={[MusicalCubeSounds.guitarB, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm, MusicalCubeSounds.brassAm]} />
      </div>

      <div style={{ display : "inline-block", width: 200, marginLeft : 200}}>
        <MusicalCube keyzz={1} sounds={[MusicalCubeSounds.vocalsAm, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm, MusicalCubeSounds.brassAm]} />
      </div>

      <div style={{ display : "inline-block", width: 200, marginLeft : 175}}>
        <MusicalCube keyzz={2} sounds={[MusicalCubeSounds.brassAm, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm, MusicalCubeSounds.brassAm]} />
      </div>
    </div>


  </>)
}

export default MusicalCubesRealm;  