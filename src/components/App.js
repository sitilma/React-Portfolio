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
    if (portfoliotextElement.textContent === "▾MY PORTFOLIO") {
      portfoliotextElement.textContent = "▸MY PORTFOLIO";
    } else {
      portfoliotextElement.textContent = "▾MY PORTFOLIO";
    }
  }

  render() {
    console.log(this.props.lang);
    return (
      <div className="App">
        <div className="flex">
          <div className="left-container">
            <div className={"exproler"}>EXPLORER</div>
            <div id={"portfolioContainer"}>
              <span id={"portfolio"} onClick={this.portfolioDropdown}>
                ▸MY PORTFOLIO
              </span>
              <Folder files={SKILL} name={"Skill"} />
              <Folder files={WORKS} name={"Works"} />
              <File name={"README"} />
              <File name={"Contact"} />
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
  { name: "PHP" },
  { name: "Ruby" },
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
