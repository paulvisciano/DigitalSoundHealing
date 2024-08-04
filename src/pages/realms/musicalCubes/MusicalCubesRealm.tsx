import { useState } from "react";
import tracks, { Track } from "./tracks";

import TrackPicker from "components/musicalCube/trackPicker/TrackPicker";
import TrackCubes from "components/musicalCube/trackCubes/TrackCubes";

import "./MusicalCubesRealm.css";

const MusicalCubesRealm = () => {
  const INITIAL_TRACK = tracks[0];
  const [selectedTrack, setSelectedTrack] = useState<Track>(INITIAL_TRACK);

  return (<div className="musical-realm">

    <div className="track-cubes-container">
      {selectedTrack && <TrackCubes track={selectedTrack} />}
    </div>

    <div className="track-picker-container">
      <TrackPicker initialTrack={selectedTrack} onTrackSelected={(newTrack: Track) =>
        setSelectedTrack(newTrack)
      } />
    </div>
  </div>)
};

export default MusicalCubesRealm;
