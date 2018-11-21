import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { changeLangState } from "../actions";
import Folder from "./Folder/Folder";
import File from "./File/File";
import Code from "./Code/Code";
class App extends Component {
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
    console.log(this.props.lang);
    return (
      <div className="App">
        <div className="flex">
          <div className="left-container">
            <div className={"exproler"}>EXPLORER</div>
            <div id={"portfolio"} onClick={this.portfolioDropdown}>
              ▸MY PORTFOLIO
            </div>
            <div id={"portfolioContainer"}>
              <Folder names={SKILL} name={"Skill"} />
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
                        <File name={work.name} />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
              <File
                name={"README"}
                onFileClick={() => {
                  this.send.bind(this);
                }}
              />
            </div>
          </div>
          <div className="light-container">
            <Code />
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
const mapStateToProps = state => ({ lang: state.lang });
const mapDispatchToProps = dispatch => ({
  onClick(lang) {
    dispatch(changeLangState(lang));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
