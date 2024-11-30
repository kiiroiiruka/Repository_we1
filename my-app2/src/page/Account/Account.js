import React, { useState } from 'react';
import Data_account from './Data_account'; // Data_account.js をインポート

function Account() 
{
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // 入力変更ハンドラー
  const handleInputChange = (e) => 
  {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // フォーム送信時の処理
  const handleSubmit = (e) => 
  {
    e.preventDefault(); // ページ遷移を防ぐ
    // フォームデータを Data_account.js に渡す
    console.log('送信するデータ:', formData);
  };

  return (
    <div>
      <h1>アカウント作成</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">ユーザーネーム:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">メールアドレス:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">パスワード:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">アカウント作成</button>
      </form>

      {/* Data_account.js にフォームデータを渡す */}
      <Data_account formData={formData} />
    </div>
  );
}

export default Account;