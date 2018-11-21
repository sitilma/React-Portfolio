import React from "react";
import { connect } from "react-redux";
import "./code.css";
import { Codes } from "./codes";

function Code(props) {
  const langState = props.lang.codeName;
  return (
    <React.Fragment>
      {Codes.map(code => {
        if (code.id === langState) {
          const Number = Array.from(Array(code.number).keys());
          return (
            <React.Fragment key={langState}>
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
    </React.Fragment>
  );
}

const mapStateToProps = state => ({ lang: state.lang });

export default connect(mapStateToProps)(Code);
