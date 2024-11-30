import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Linkをインポート
import Side_button from '../../component/Side_button/Side_button';
import Data_login from './Data_login'; // Data_loginをインポート
import './Login.css';

function Login() 
{
  const [OK_or_NO_text, OK_or_NO_draw] = useState("");
  const loginRef = useRef(); // 子コンポーネントData_loginを参照を取得するための ref

  const access = (email, password) => 
  {
    // パスワードとメールアドレスを引数として受け取る
    if (Login_email === email && Login_password === password)OK_or_NO_draw("");//パスワードとメールアドレスがあっているかの確認
    else OK_or_NO_draw("パスワード、またはメールアドレスが間違っています");//間違ってたらエラーメッセージ表示
  };

  const handleLogin = () => 
  {
    // Data_loginからメールアドレスとパスワードを取得
    if (loginRef.current)
    {
      const email = loginRef.current.getEmail();//子コンポーネントからemail取得
      const password = loginRef.current.getPassword();//子コンポーネントからpassword取得
      access(email, password); // access関数に渡して処理
    }
  };

  return (
    <div className="login-container">
      <h1>開発者により具体的に我々の作って欲しいホームページを届けよう</h1>

      {/* Data_loginコンポーネントの使用 */}
      <Data_login ref={loginRef} initialEmail="" initialPassword="" />
      <p className="error">{OK_or_NO_text}</p>
      {/* クリック時に、Data_loginから値を取得してログイン処理 */}
      <Side_button
        Button_text="ログイン開始！"
        button_position="center"
        onClick={handleLogin}
      />
      {/* アカウント作成画面へのリンク */}
      <Link to="/account" onClick={handleClick}>アカウントを持っていない方はここをクリック</Link>
    </div>
  );
}

export default Login;
