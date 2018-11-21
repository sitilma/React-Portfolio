import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Folder from "./folder/folder";
import File from "./file/file";
import Code from "./code/code";
import Header from "./header/header";
class App extends Component {
  WELCOME = "WelcomeToMyPortfolio";
  portfolioDropdown() {
    let portfolioElement = document.getElementById("portfolioContainer");
    let portfolioTriangle = document.getElementById("textTriangle");
    portfolioElement.classList.toggle("none");
    portfolioTriangle.textContent =
      portfolioTriangle.textContent === "▾" ? "▸" : "▾";
  }

  headerCreate() {}

  render() {
    console.log(this.props.lang);
    return (
      <div className="App">
        <div className="flex">
          <div className={"exproler"}>EXPLORER</div>
          <div id={"header"}>
            <Header name={"README"} />
          </div>
        </div>
        <div className="main">
          <div className="left-container">
            <div id={"portfolioContainer"}>
              <div id={"portfolio"} onClick={this.portfolioDropdown}>
                <span id={"textTriangle"}>▾</span>WelcomeToMyPortfolio
              </div>
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

export default connect(mapStateToProps)(App);
