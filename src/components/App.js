import React, { Component } from "react";
import "./App.css";
import File from "./File/File";
import Code from "./Code/Code";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillfolder: true,
      workfolder: true,
      codeName: "README",
      actives: ["README"]
    };
  }
  childFunc(code) {
    this.setState({
      codeName: code
    });
  }
  portfolioDropdown() {
    let portfolioElement = document.getElementById("portfolioContainer");
    let portfoliotextElement = document.getElementById("portfolio");
    portfolioElement.classList.toggle("none");
    if ((portfoliotextElement.textContent = "▾MY PORTFOLIO")) {
      portfoliotextElement.textContent = "▸MY PORTFOLIO";
    } else {
      portfoliotextElement.textContent = "▾MY PORTFOLIO";
    }
  }
  skillDropdown() {
    let skillElement = document.getElementById("skillFolder");
    let skillFolderElemtnt = document.getElementById("skillFolderIcon");
    skillElement.classList.toggle("none");
    skillFolderElemtnt.classList.toggle("fa-folder-open");
  }
  workDropdown() {
    let workElement = document.getElementById("workFolder");
    let workFolderElemtnt = document.getElementById("workFolderIcon");
    workElement.classList.toggle("none");
    workFolderElemtnt.classList.toggle("fa-folder-open");
  }

  render() {
    return (
      <div className="App">
        <div className="flex">
          <div className="left-container">
            <div className={"exproler"}>EXPLORER</div>
            <div id={"portfolio"} onClick={this.portfolioDropdown}>
              ▸MY PORTFOLIO
            </div>
            <div id={"portfolioContainer"}>
              <div id="skill">
                <div className={"folder"} onClick={this.skillDropdown}>
                  <i
                    id={"skillFolderIcon"}
                    className="fas fa-folder-open fa-folder"
                  />
                  <span>Skill</span>
                </div>
                <div id={"skillFolder"} className={"folderParent"}>
                  {SKILL.map(skill => {
                    return (
                      <React.Fragment key={skill.name}>
                        <File
                          name={skill.name}
                          onFileClick={() => {
                            this.childFunc(skill.name);
                          }}
                        />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
              <div id="work">
                <div className={"folder"} onClick={this.workDropdown}>
                  <i
                    id={"workFolderIcon"}
                    className="fas fa-folder-open fa-folder"
                  />
                  <span>Works</span>
                </div>
                <div id={"workFolder"} className={"folderParent"}>
                  {WORKS.map(work => {
                    return (
                      <React.Fragment key={work.name}>
                        <File
                          name={work.name}
                          onFileClick={() => {
                            this.childFunc(work.name);
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
                  this.childFunc("README");
                }}
              />
            </div>
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

const WORKS = [
  { name: "igo" },
  { name: "Markdown" },
  { name: "Portfolio" },
  { name: "Laravel" }
];
export default App;
