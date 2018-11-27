import React from "react";
import "./terminal.css";

function Terminal(props) {
  return (
    <div className={"terminalContainer"}>
      <div className={"terminalHeader"}>
        <p>TERMINAL</p>
        <p>OUTPUT</p>
        <p>DEBUG CONSOLE</p>
      </div>
      <div className={"terminalContent"}>
        <p className={"terminalText"}>
          ~/Desktop/Myportfolio<span className={"terminalGit"}>(master)</span>
        </p>
        <p className={"terminalInput"}>$</p>
      </div>
    </div>
  );
}

export default Terminal;
