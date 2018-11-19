import React, { Component } from "react";
import "./App.css";
import File from "./File";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeName: "default",
      actives: ["deafult"]
    };
  }
  childFunc(code) {
    this.setState({
      codeName: code
    });
  }
  code() {
    switch (this.state.codeName) {
      case "ruby.rb":
        return CODES[0].body;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="App">
        <div className="flex">
          <div className="left-container">
            <ul id="skill">
              {SKILL.map(item => {
                return (
                  <li key={item.name}>
                    <File
                      name={item.name}
                      onFileClick={() => {
                        this.childFunc(item.name);
                      }}
                    />
                  </li>
                );
              })}
            </ul>
            <ul id="work">
              {WORK.map(item => {
                return (
                  <li key={item.name}>
                    <File
                      name={item.name}
                      onFileClick={() => {
                        this.childFunc(item.name);
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="light-container">
            {CODES.map(code => {
              if (code.id === this.state.codeName) {
                return code.body;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

const CODES = [
  {
    id: "ruby",
    body: <h1 className="aaa">Ruby</h1>
  },
  {
    id: "php",
    body: <h1 className="PHP">PHP</h1>
  }
];

const SKILL = [
  { name: "ruby" },
  { name: "php" },
  { name: "javascript" },
  { name: "docker" }
];

const WORK = [
  { name: "igo" },
  { name: "markdown" },
  { name: "portfolio" },
  { name: "laravel" }
];
export default App;
