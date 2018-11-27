import React from "react";
import { connect } from "react-redux";
import "./code.css";
import { Codes } from "./codes";

function Code(props) {
  const codeState = props.code.codeName;

  function defaultCode() {
    if (codeState === undefined) {
      return (
        <div className="code default">
          <h1 className={"defaultTop"}>Welcome To MyPortfolio</h1>
        </div>
      );
    }
  }
  return (
    <div className={"codeContainer"}>
      {Codes.map(code => {
        if (code.id === codeState) {
          const Number = Array.from(Array(code.number).keys());
          return (
            <React.Fragment key={codeState}>
              <ul className="number">
                {Number.map(number => {
                  return <li key={number + 1}>{number + 1}</li>;
                })}
              </ul>
              {code.body}
            </React.Fragment>
          );
        }
        return null;
      })}
      {defaultCode()}
    </div>
  );
}

const mapStateToProps = state => ({ code: state.code });

export default connect(mapStateToProps)(Code);
