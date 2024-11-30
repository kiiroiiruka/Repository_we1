
import React from 'react';
import { Sidebar } from './components/Sidebar';  // サイドバーコンポーネント
import { Content } from './components/Content';  // コンテンツコンポーネント
import { Footer } from './components/Footer';  // コンテンツコンポーネント
import './App.css';  // CSSのインポート

function App() {
  return (
    <div className="App">{/* Cssのスタイルを反映させるのに必要なタグ */}
      {/*<Header />  {/* 親コンポーネントが子コンポーネントを表示 */}
      <div className="layout">{/* App.css 内の.layoutを活用する */}
        <Sidebar />  {/* 子コンポーネント */}
        <Content />  {/* 子コンポーネント */}
      </div>
      {/*<Footer />  {/* 子コンポーネント */}
    </div>
  );
}

export default App; {/* Appコンポーネントを他のプログラムファイルから利用するのに必要な記述 */}

//↓初期プログラム↓
/*import logo from './logo.svg';
import './App.css';

function App() 
{
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;*/
