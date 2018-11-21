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
  render() {
    console.log(this.props.active);
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
              <Folder files={WORK} name={"Work"} />
              <File name={"README"} info={"¥WelcomeToMyPortfolio¥README"} />
              <File name={"Contact"} info={"¥WelcomeToMyPortfolio¥Contact"} />
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
  { name: "PHP", info: "¥WelcomeToMyPortfolio¥Skill¥PHP" },
  { name: "Ruby", info: "¥WelcomeToMyPortfolio¥Skill¥Ruby" },
  { name: "JavaScript", info: "¥WelcomeToMyPortfolio¥Skill¥JavaScript" },
  { name: "Docker", info: "¥WelcomeToMyPortfolio¥Skill¥Docker" }
];

const WORK = [
  { name: "igo", info: "¥WelcomeToMyPortfolio¥WORK¥igo" },
  { name: "Markdown", info: "¥WelcomeToMyPortfolio¥WORK¥Markdown" },
  { name: "Portfolio", info: "¥WelcomeToMyPortfolio¥WORK¥Portfolio" },
  { name: "Laravel", info: "¥WelcomeToMyPortfolio¥WORK¥Laravel" }
];
const mapStateToProps = state => ({ lang: state.lang, active: state.active });

export default connect(mapStateToProps)(App);
