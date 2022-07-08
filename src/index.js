import React from "react";
import ReactDom from "react-dom";
//どこ～関数を持ってきたのかが分かるようにインポート時には関数と、ファイル名を書く
import App from "./App.js";
//画面にApp関数を反映,どこに反映かも（）の中に書く
ReactDom.render(<App />, document.getElementById("root"));
