import React from "react";
import "./App.css";

//import * as fs from 'fs';
import Makeid from "./Generate";

const fs = require("fs");


function App() {

  const gen = Makeid()

  let lyrics =
    "But still I'm having memories of high speeds when the cops crashed\n" +
    "As I laugh, pushin the gas while my Glocks blast\n" +
    "We was young and we was dumb but we had heart";
  // write to a new file named 2pac.txt
  fs.writeSync("2pac.txt", lyrics, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log("Lyric saved!");
  });

  return (
    <div>
      <p>Генератор пароля</p>
      <div>
      <Makeid />
      </div>
    </div>
  );
}

export default App;
