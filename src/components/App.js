import React, { Component } from "react";
import "./App.css";
import File from "./File";
import Code from "./Code";
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

  render() {
    return (
      <div className="App">
        <div className="flex">
          <div className="left-container">
            <ul id="skill">
              skill
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
              work
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
            <Code state={this.state.codeName} />
          </div>
        </div>
      </div>
    );
  }
}
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
