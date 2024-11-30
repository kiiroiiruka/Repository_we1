import React from 'react';

export const PcInstructions = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '20px',
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      WASDキーで移動可能
    </div>
  );
};
