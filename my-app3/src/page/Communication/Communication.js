import React, { useState } from 'react';
import MainContainer from '../../component/Main_container/Main_container'; // MainContainerをインポート
import IMAGE1 from './images/仮画像1.png'// 画像のパス
const Communication = () => 
{
  const page_A = () => 
  {
    console.log('ページAがクリックされました');
  };

  const page_B = () => 
  {
    console.log('ページBがクリックされました');
  };

  const page_C = () => 
  {
    console.log('ページCがクリックされました');
  };

  const page_D = () => 
  {

  };

  // メインコンテナに渡すデータを定義
  const layoutData = [
    {
      sideButtonPosition: 'left',
      buttonText: 'コミュニケーション画面ボタン1',
      onClick: page_A,
      text: 'コミュニケーション画面に表示させたい文1',
      textSize: 20,
      imageSrc: IMAGE1
    },
    {
      sideButtonPosition: 'left',
      buttonText: 'コミュニケーション画面ボタン2',
      onClick: page_B,
      text: 'コミュニケーション画面に表示させたい文2',
      textSize: 20,
      imageSrc: IMAGE1
    },
    {
      sideButtonPosition: 'right',
      buttonText: 'コミュニケーション画面ボタン3',
      onClick: page_C,
      text: 'コミュニケーション画面に表示させたい文3',
      textSize: 20,
      imageSrc: IMAGE1
    },
    {
      sideButtonPosition: 'center',
      buttonText: 'コミュニケーション画面ボタン4',
      onClick: page_D,
      text: 'コミュニケーション画面に表示させたい文4',
      textSize: 20,
      imageSrc: IMAGE1
    },
  ];
  return (
    <div>
      <h1>コミュニケーション画面です(仮配置)</h1>
      
      {/* MainContainerコンポーネントを使って、layoutDataを渡す */}
      <MainContainer layoutData={layoutData} />
    </div>
  );
};

export default Communication;