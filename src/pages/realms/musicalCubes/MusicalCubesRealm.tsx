import { useState } from "react";
import { Track } from "./tracks";

import TrackPicker from "components/musicalCube/trackPicker/TrackPicker";
import TrackCubes from "components/musicalCube/trackCubes/TrackCubes";

import "./MusicalCubesRealm.css";

const MusicalCubesRealm = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track>();

  return (<div className="musical-realm">
    
    <div className="track-cubes-container">
      {selectedTrack && <TrackCubes track={selectedTrack} />}
    </div>

    <div className="track-picker-container">
      <TrackPicker onTrackSelected={(newTrack: Track) => {
        setSelectedTrack(newTrack);
      }} />
    </div>
  </div>)
};

export default MusicalCubesRealm;
