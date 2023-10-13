import React from "react";

interface Coordinate {
  x: number;
  y: number;
}

type GesturePathProps = {
  path: Coordinate[];
  color: string;
  slopRadius: number;
};

const GesturePath = ({ path, color, slopRadius}: GesturePathProps) =>
(<>
  {path.map((point, index) => (
    <div style={{
      position: 'absolute',
      top: "50%",
      left: "50%",
      opacity: 0.6,
      width: slopRadius * 2,
      height: slopRadius * 2,
      borderRadius: slopRadius,
      backgroundColor: color,
      marginLeft: point.x - slopRadius,
      marginTop: point.y - slopRadius,
    }}
      key={index}
    />
  ))}
</>);

export default GesturePath;