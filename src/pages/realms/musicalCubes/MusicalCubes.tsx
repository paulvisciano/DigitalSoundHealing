import "./MusicalCubes.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { MusicalCubeSounds } from "./sounds/MusicalCubeSounds";

const MusicalCubesRealm: React.FC = () => {
  return (<>
{/* Fix alignment styles */}
    <div style={{ marginLeft: 300, marginTop: 300 }}>
      <div style={{ display : "inline-block" }}>
      <p style={{textAlign : "center"}}>Guitar</p>
        <MusicalCube keyzz={0} sounds={[MusicalCubeSounds.guitarB, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm, MusicalCubeSounds.brassAm]} />
      </div>

      <div style={{ display : "inline-block", marginLeft : 200}}>
        <p style={{textAlign : "center"}}>Vocals</p>
        <MusicalCube keyzz={1} sounds={[MusicalCubeSounds.vocalsAm, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm, MusicalCubeSounds.brassAm]} />
      </div>

      <div style={{ display : "inline-block", marginLeft : 175}}>
        <p style={{textAlign : "center"}}>Brass</p>
        <MusicalCube keyzz={2} sounds={[MusicalCubeSounds.brassAm, MusicalCubeSounds.melodyB, MusicalCubeSounds.vocalsAm, MusicalCubeSounds.brassAm]} />
      </div>
    </div>


  </>)
}

export default MusicalCubesRealm;  