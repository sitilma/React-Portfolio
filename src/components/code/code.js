import React from "react";
import { connect } from "react-redux";
import "./code.css";
import { Codes, DefaultCode } from "../codes";

function Code(props) {
  const codeState = props.code.codeName;

  function defaultCode() {
    if (codeState === undefined) {
      return DefaultCode;
    }
  }
  return (
    <div className={"codeContainer"}>
      {Codes.map(code => {
        if (code.name === codeState) {
          const Numbers = Array.from(Array(code.number).keys());
          return (
            <React.Fragment key={codeState}>
              <ul className="number">
                {Numbers.map(number => {
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
