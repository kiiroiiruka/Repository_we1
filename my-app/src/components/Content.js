import React, { useState, useEffect } from 'react';
import { Character } from './Character';
import { MobileControls } from './MobileControls';
import { PcInstructions } from './PcInstructions';

export const Content = () => 
{
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [moving, setMoving] = useState({ up: false, down: false, left: false, right: false });
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => 
  {
    const handleResize = () => {setSize({ width: window.innerWidth, height: window.innerHeight });};//アロー関数
    window.addEventListener('resize', handleResize);//コンポーネント起動時にresizeというイベントが発生したらhandleResizeというアロー関数を起動させるように設定する。
    if (window.innerWidth <= 768)setIsMobile(true);//
    else setIsMobile(false);
    return () => window.removeEventListener('resize', handleResize);//コンポーネント動作終了時に一度実行される。
  }, []);//初回のみ実行される

  const moveCharacter = (direction) => 
  {
    setPosition((prevPosition) => 
    {
      const step = 1;
      switch (direction) 
      {
        case "up":return { ...prevPosition, y: prevPosition.y - step };
        case "down":return { ...prevPosition, y: prevPosition.y + step };
        case "left":return { ...prevPosition, x: prevPosition.x - step };
        case "right":return { ...prevPosition, x: prevPosition.x + step };
        default:return prevPosition;
      }
    });
  };

  useEffect(() => 
  {
    const interval = setInterval(() => 
    {
      if (moving.up) moveCharacter("up");
      if (moving.down) moveCharacter("down");
      if (moving.left) moveCharacter("left");
      if (moving.right) moveCharacter("right");
    }, 5);
    return () => clearInterval(interval);
  }, [moving]);//movingという値が変更されるたびに関数が実行されるように指定

  const handleTouchStart = (direction) => 
  {
    setMoving((prev) => ({ ...prev, [direction]: true }));
  };

  const handleTouchEnd = (direction) => 
  {
    setMoving((prev) => ({ ...prev, [direction]: false }));
  };

  const handleMouseDown = (direction) => 
  {
    setMoving((prev) => ({ ...prev, [direction]: true }));
  };

  const handleMouseUp = (direction) => 
  {
    setMoving((prev) => ({ ...prev, [direction]: false }));
  };

  useEffect(() => 
  {
    const handleKeyDown = (e) => 
    {
      if (e.key === 'w') setMoving((prev) => ({ ...prev, up: true }));//...prev,up:trueで既存のprevのup部分の数値が変わったバージョンのオブジェクトが作れる
      if (e.key === 's') setMoving((prev) => ({ ...prev, down: true }));//...prev,down:trueで既存のprevのdown部分の数値が変わったバージョンのオブジェクトが作れる
      if (e.key === 'a') setMoving((prev) => ({ ...prev, left: true }));//...prev,left:trueで既存のprevのleft部分の数値が変わったバージョンのオブジェクトが作れる
      if (e.key === 'd') setMoving((prev) => ({ ...prev, right: true }));//...prev,right:trueで既存のprevのright部分の数値が変わったバージョンのオブジェクトが作れる
    };

    const handleKeyUp = (e) => 
    {
      if (e.key === 'w') setMoving((prev) => ({ ...prev, up: false }));
      if (e.key === 's') setMoving((prev) => ({ ...prev, down: false }));
      if (e.key === 'a') setMoving((prev) => ({ ...prev, left: false }));
      if (e.key === 'd') setMoving((prev) => ({ ...prev, right: false }));
    };

    if (!isMobile) 
    {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      return () => 
      {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [isMobile]);//isMobileという値が変更されるたびに関数が実行されるように指定

  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Character position={position} />
      </div>
      {isMobile && <MobileControls handleTouchStart={handleTouchStart} handleTouchEnd={handleTouchEnd} handleMouseDown={handleMouseDown} handleMouseUp={handleMouseUp} />}
      {!isMobile && <PcInstructions />}
    </main>
  );
};