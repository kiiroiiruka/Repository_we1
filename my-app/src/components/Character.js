import React from 'react';
import characterImage from '../images/a5.png';

export const Character = ({ position }) => {
  return (
    <img
      src={characterImage}
      alt="キャラクター"
      style={{
        position: "absolute",
        left: position.x + "px",
        top: position.y + "px",
        width: "30px",
        height: "50px",
      }}
    />
  );
};