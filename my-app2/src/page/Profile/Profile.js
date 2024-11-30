import React, { useState } from 'react';
import Side_button from '../../component/Side_button/Side_button';
import Display_text from '../../component/Display_text/Display_text';

const Profile = () => {
  // 初期サイズとして1を設定（表示されるテキストのサイズ）
  const [textSize, setTextSize] = useState(8); 
  const [textContent, setTextContent] = useState('あああああああ'); // 初期のテキスト内容

  // page_Aのボタンがクリックされたときに実行される処理
  const page_A = () => {
    setTextSize(1);  // テキストサイズを1に設定
    setTextContent('テキストA');  // テキスト内容を設定
  };

  // page_Bのボタンがクリックされたときに実行される処理
  const page_B = () => {
    setTextSize(2);  // テキストサイズを2に設定
    setTextContent('テキストB');  // テキスト内容を設定
  };

  // page_Cのボタンがクリックされたときに実行される処理
  const page_C = () => {
    setTextSize(3);  // テキストサイズを3に設定
    setTextContent('テキストC');  // テキスト内容を設定
  };

  // page_Dのボタンがクリックされたときに実行される処理
  const page_D = () => {
    setTextSize(4);  // テキストサイズを4に設定
    setTextContent('テキストD');  // テキスト内容を設定
  };

  return (
    <div>
      <h1>プロフィール画面です(仮配置)</h1> 
      
      {/* ボタンを追加 */}
      <Side_button Button_text="プロフィール画面につけたいボタン1個目" Button_position="left" onClick={page_A}/>
      <Side_button Button_text="プロフィール画面につけたいボタン2個目" Button_position="left" onClick={page_B}/>
      <Side_button Button_text="プロフィール画面につけたいボタン3個目" Button_position="left" onClick={page_C}/>
      <Side_button Button_text="プロフィール画面につけたいボタン4個目" Button_position="left" onClick={page_D}/>

      {/* Display_text コンポーネントに動的な値を渡す */}
      <Display_text size_of_text={textSize} draw_text="プロフィール画面です(仮配置)" />
    </div>
  );
};

export default Profile;
