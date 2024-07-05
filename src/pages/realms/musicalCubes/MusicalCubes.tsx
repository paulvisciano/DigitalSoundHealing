import "./MusicalCubes.css";
import MusicalCube from "components/musicalCube/MusicalCube";
import { MusicalCubeSounds } from "./sounds/MusicalCubeSounds";

const MusicalCubesRealm: React.FC = () => {
  return (<>
    <div>
      {/* TODO: Add actual sounds  */}
      <MusicalCube sounds={[MusicalCubeSounds.PianoCmin, MusicalCubeSounds.PianoCopy ]}></MusicalCube>
    </div>

  </>)
}

export default MusicalCubesRealm;