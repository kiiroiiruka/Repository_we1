import React from 'react';

export const MobileControls = ({ handleTouchStart, handleTouchEnd, handleMouseDown, handleMouseUp }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "25%",
        right: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ↑ボタン */}
      <button
        onTouchStart={() => handleTouchStart('up')}
        onTouchEnd={() => handleTouchEnd('up')}
        onMouseDown={() => handleMouseDown('up')}
        onMouseUp={() => handleMouseUp('up')}
        onTouchMove={(e) => e.preventDefault()}
        style={{ marginBottom: "10px", fontSize: "24px", padding: "15px", width: "60px", height: "60px" }}
      >
        ↑
      </button>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* ← →ボタン */}
        <button
          onTouchStart={() => handleTouchStart('left')}
          onTouchEnd={() => handleTouchEnd('left')}
          onMouseDown={() => handleMouseDown('left')}
          onMouseUp={() => handleMouseUp('left')}
          onTouchMove={(e) => e.preventDefault()}
          style={{ marginRight: "70px", fontSize: "24px", padding: "15px", width: "60px", height: "60px" }}
        >
          ←
        </button>
        <button
          onTouchStart={() => handleTouchStart('right')}
          onTouchEnd={() => handleTouchEnd('right')}
          onMouseDown={() => handleMouseDown('right')}
          onMouseUp={() => handleMouseUp('right')}
          onTouchMove={(e) => e.preventDefault()}
          style={{ fontSize: "24px", padding: "15px", width: "60px", height: "60px" }}
        >
          →
        </button>
      </div>
      {/* ↓ボタン */}
      <button
        onTouchStart={() => handleTouchStart('down')}
        onTouchEnd={() => handleTouchEnd('down')}
        onMouseDown={() => handleMouseDown('down')}
        onMouseUp={() => handleMouseUp('down')}
        onTouchMove={(e) => e.preventDefault()}
        style={{ marginTop: "10px", fontSize: "24px", padding: "15px", width: "60px", height: "60px" }}
      >
        ↓
      </button>
    </div>
  );
};