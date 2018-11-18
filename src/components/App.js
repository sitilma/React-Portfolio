import React, { Component } from "react";
import "./App.css";

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
    return <div className="App">{CODES[1].body}</div>;
  }
}

export default App;
