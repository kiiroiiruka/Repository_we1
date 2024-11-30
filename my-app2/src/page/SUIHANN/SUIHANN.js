import React from 'react';
import Side_button from '../../component/Side_button/Side_button';
const SUIHANN = () => 
{
  const page_A =()=>
  {
    return()=>{}
  }
  const page_B =()=>
  {
    return()=>{}
  }
  const page_C =()=>
  {
    return()=>{}
  }
  const page_D =()=>
  {
    return()=>{}
  }
  return (
    <div>
      <h1>すいはん画面です(仮配置)</h1> {/* ボタンを追加(最初から作業始める際のボタン) */}
      <Side_button Button_text="すいはん画面につけたいボタン1個目" Button_position="left" onClick={page_A}/>
      <Side_button Button_text="すいはん画面につけたいボタン2個目" Button_position="left" onClick={page_B}/>
      <Side_button Button_text="すいはん画面につけたいボタン3個目" Button_position="left" onClick={page_C}/>
      <Side_button Button_text="すいはん画面につけたいボタン4個目" Button_position="left" onClick={page_D}/>
    </div>
  );
}
export default SUIHANN; // Appコンポーネント内でSUIHANNコンポーネントの使用できるようにさせる為の記述