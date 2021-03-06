import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Folder from "./folder/folder";
import File from "./file/file";
import Code from "./code/code";
import Head from "./header/head";
import Terminal from "./terminal/terminal";
import { SKILL, WORK } from "./codes";

// info
const WELCOME = "¥WelcomeToMyPortfolio";
class App extends Component {
  // portfolioの表示非表示及びテキストの矢印を変える。
  portfolioDropdown() {
    const portfolioElement = document.getElementById("portfolioContainer");
    const portfolioTriangle = document.getElementById("textTriangle");
    portfolioElement.classList.toggle("none");
    portfolioTriangle.textContent =
      portfolioTriangle.textContent === "▾" ? "▸" : "▾";
  }

  // componentが再描画されると呼び出される。"activeHeader"を取り除き現在のcodeHeaderに"activeHeader"を与える。
  componentDidUpdate() {
    const prevHeader = document.getElementsByClassName("activeHeader");
    const activeHeader = document.getElementById(
      this.props.code.codeName + "Header"
    );
    if (prevHeader[0]) {
      prevHeader[0].classList.remove("activeHeader");
    }
    if (activeHeader) {
      activeHeader.classList.add("activeHeader");
    }
  }

  render() {
    // console.log(this.props.active);
    // console.log(this.props.code);
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
              <Folder files={SKILL} name={"Skills"} />
              <Folder files={WORK} name={"Works"} />
              <File name={"About"} info={`${WELCOME}¥About`} />
              <File name={"Contact"} info={`${WELCOME}¥Contact`} />
            </div>
          </div>
          <div className="light-container">
            <Code />
            <Terminal />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ code: state.code, active: state.active });

export default connect(mapStateToProps)(App);
