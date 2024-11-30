import React from 'react';
import './Display_text.css'; // CSSファイルをインポート

// propsを正しく受け取る
function Display_text({ size_of_text, draw_text }) {
  const text_size = `text_of_page-${size_of_text}`; // size_of_textを使ってクラス名を作成

  console.log(text_size); // クラス名が正しく生成されているか確認

  return (
    <div className={text_size}>
      {/* draw_text によって渡されたテキスト内容を表示 */}
      {draw_text}
    </div>
  );
}

export default Display_text;
