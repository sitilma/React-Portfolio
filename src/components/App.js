import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Folder from "./folder/folder";
import File from "./file/file";
import Code from "./code/code";
import Head from "./header/head";

const WELCOME = "¥WelcomeToMyPortfolio";
const WELCOMESKILL = "¥WelcomeToMyPortfolio¥Skill";
const WELCOMEWORK = "¥WelcomeToMyPortfolio¥Work";
class App extends Component {
  portfolioDropdown() {
    let portfolioElement = document.getElementById("portfolioContainer");
    let portfolioTriangle = document.getElementById("textTriangle");
    portfolioElement.classList.toggle("none");
    portfolioTriangle.textContent =
      portfolioTriangle.textContent === "▾" ? "▸" : "▾";
  }
  render() {
    // console.log(this.props.active);
    // console.log(this.props.lang);
    return (
      <div className="App">
        <div className="flex">
          <div className={"exproler"}>EXPLORER</div>
          <Head />
        </div>
        <div className="main">
          <div className="left-container">
            <div id={"portfolioContainer"}>
              <div id={"portfolio"} onClick={this.portfolioDropdown}>
                <span id={"textTriangle"}>▾</span>WelcomeToMyPortfolio
              </div>
              <Folder files={SKILL} name={"Skill"} info={WELCOMESKILL} />
              <Folder files={WORK} name={"Work"} info={WELCOMEWORK} />
              <File name={"README"} info={`${WELCOME}¥README`} />
              <File name={"Contact"} info={`${WELCOME}¥Contact`} />
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
  { name: "PHP", info: `${WELCOMESKILL}¥PHP` },
  { name: "Ruby", info: `${WELCOMESKILL}¥Ruby` },
  { name: "JavaScript", info: `${WELCOMESKILL}¥JavaScript` },
  { name: "Docker", info: `${WELCOMESKILL}¥Docker` }
];

const WORK = [
  { name: "igo", info: `${WELCOMEWORK}¥igo` },
  { name: "Markdown", info: `${WELCOMEWORK}¥Markdown` },
  { name: "Portfolio", info: `${WELCOMEWORK}¥Portfolio` },
  { name: "Laravel", info: `${WELCOMEWORK}¥Laravel` }
];
const mapStateToProps = state => ({ lang: state.lang, active: state.active });

export default connect(mapStateToProps)(App);
