import React, { Component } from "react";
import "./App.css";
import File from "./File";
import Code from "./Code";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeName: "README",
      actives: ["README"]
    };
  }
  childFunc(code) {
    this.setState({
      codeName: code
    });
  }
  skillDropdown() {
    let skillElement = document.getElementById("skillFolder");
    let skillFolderElemtnt = document.getElementById("skillFolderIcon");
    skillElement.classList.toggle("none");
    skillFolderElemtnt.classList.toggle("fa-folder-open");
    skillFolderElemtnt.classList.toggle("fa-folder");
  }
  workDropdown() {
    let workElement = document.getElementById("workFolder");
    let workFolderElemtnt = document.getElementById("workFolderIcon");
    workElement.classList.toggle("none");
    workFolderElemtnt.classList.toggle("fa-folder-open");
    workFolderElemtnt.classList.toggle("fa-folder");
  }

  render() {
    return (
      <div className="App">
        <div className="flex">
          <div className="left-container">
            <div id="skill">
              <div className={"folder"} onClick={this.skillDropdown}>
                <i id={"skillFolderIcon"} className="fas fa-folder-open" />
                <span>Skill</span>
              </div>
              <div id={"skillFolder"} className={"folderParent"}>
                {SKILL.map(item => {
                  return (
                    <React.Fragment key={item.name}>
                      <File
                        name={item.name}
                        onFileClick={() => {
                          this.childFunc(item.name);
                        }}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div id="work">
              <div className={"folder"} onClick={this.workDropdown}>
                <i id={"workFolderIcon"} className="fas fa-folder-open" />
                <span>Works</span>
              </div>
              <div id={"workFolder"} className={"folderParent"}>
                {WORK.map(item => {
                  return (
                    <React.Fragment key={item.name}>
                      <File
                        name={item.name}
                        onFileClick={() => {
                          this.childFunc(item.name);
                        }}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <File
              name={"README"}
              onFileClick={() => {
                this.childFunc("readme");
              }}
            />
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
  { name: "Ruby" },
  { name: "PHP" },
  { name: "JavaScript" },
  { name: "Docker" }
];

const WORK = [
  { name: "igo" },
  { name: "Markdown" },
  { name: "Portfolio" },
  { name: "Laravel" }
];
export default App;
