import React, { Component } from "react";
import "./App.css";
import Folder from "./Folder";

const CODES = [
  {
    id: "ruby.rb",
    body: <p className="aaa">aaa</p>
  },
  {
    id: "php.php",
    body: <p className="aaa">aaa</p>
  }
];

class App extends Component {
  render() {
    console.log(CODES[0].id);
    return (
      <div className="App">
        <Folder id={"skill"} />
        <Folder id={"work"} />
      </div>
    );
  }
}

export default App;
