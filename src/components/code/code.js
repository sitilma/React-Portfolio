import React from "react";
import { connect } from "react-redux";
import "./code.css";
import { Codes, DefaultCode } from "../codes";

function Code(props) {
  const codeState = props.code.codeName;

  const defaultCode = () => {
    if (codeState === undefined) {
      return DefaultCode;
    }
  };
  return (
    <div className={"codeContainer"}>
      {Codes.map(code => {
        if (code.name === codeState) {
          const elements = code.body.props.children;
          return (
            <React.Fragment key={codeState}>
              {elements.map((element, i) => (
                <div className="code" key={i}>
                  <span className="number">{i}</span>
                  {element}
                </div>
              ))}
              <span className="number">{elements.length}</span>
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
