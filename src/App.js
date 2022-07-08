import React, { Component, useEffect, useState } from "react";
//コンポーネントフォルダの中のファイルに書いたコンポーネントを使いたい
import { ColorfulMessage } from "./components/ColorfulMessage";
const App = () => {
  console.log("saisyo");
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faseShowFlag);
  };
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaceShowFlag] = useState(false);

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faseShowFlag || setFaceShowFlag(true);
      } else {
        faseShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);
  return (
    <>
      <h1 style={{ color: "red" }}> こんにちは！ </h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faseShowFlag && <p>((+_+))</p>}
    </>
  );
};
//ほかのファイルでも関数が使用できるように明示的に示す必要がある
export default App;
