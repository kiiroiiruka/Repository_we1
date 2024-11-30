import { render, screen } from '@testing-library/react';//Reactコンポーネントのテストを行うためのライブラリ
import App from './App';//テストするコンポーネントが書かれたAppファイル内のAppというコンポーネントの関数

test('renders learn react link', () => 
{
  render(<App />);//コンポーネントを仮想DOMにレンダリング
  const linkElement = screen.getByText(/learn react/i);//Appコンポーネント内に「Learn React」という記述が含まれているタグ内のプログラムを取得(※iを付ければLearn React でも learn react でもOKになる、大文字小文字を区別しなくなる)
  expect(linkElement).toBeInTheDocument();
});

//「render(<App />);」
//　→テストするコンポーネントを仮想DOMにぶち込む

//「const linkElement = screen.getByText(/learn react/i);」
//　→仮想DOMにぶち込んだコンポーネント内のタグ内のプログラムをタグ単位で取得(タグ内のテキストで判断)

//「expect(linkElement).toBeInTheDocument();」
//　→取得したコンポーネント内のタグ内のプログラムがちゃんと動くかテスト

//親コンポーネント→子コンポーネントを使って作られたプログラム
//子コンポーネント→タグ一つで変数値を指定値にしたバージョンのプログラムの作成が可能なプログラム
//props は「子コンポーネントの引数に入るデータ」
//state は「コンポーネント内の変数に入るデータ」
