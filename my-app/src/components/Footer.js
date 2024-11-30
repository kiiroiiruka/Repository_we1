// src/components/Footer.js
import React, { useState, useEffect } from 'react';  // useState と useEffect をインポート

export const Footer = () => 
{
  // state の初期値を { x: 100, y: 100 } に設定
  const [position, setPosition] = useState({ x: 100, y: 100 });

  // start 関数を定義し、終了時の処理を行う
  const start = () => 
{
    // 終了時に実行したいクリーンアップ関数を返す
    return () => 
    {
      console.log("コンポーネントがアンマウントされるときに実行される");
    };
  };

  // control 関数を定義し、ボタンをクリックしたときに position を更新
  const control = () => 
{
    setPosition({ x: 11, y: 11 });  // position はオブジェクトで渡す
  };

  // useEffect の中で start 関数を呼び出し、アンマウント時にクリーンアップを行う
  useEffect(() => 
  {
    // start 関数を実行して、終了時にクリーンアップを行う
    const cleanup = start();
    return cleanup; // useEffect のクリーンアップ関数として cleanup(start関数内のreturn文) を返す
  }, []);  // 初回レンダリング時のみ実行

  return (
    <footer>
      <h3>フッター</h3>
      <button onClick={control}>押して下さい x: {position.x}, y: {position.y}</button>
    </footer>
  );
};

export default Footer;
