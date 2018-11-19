import React from "react";
import "./Code.css";
import { Codes } from "./Codes";

function Code(props) {
  return (
    <React.Fragment>
      {Codes.map(code => {
        if (code.id === props.state) {
          const Number = Array.from(Array(code.number + 1).keys());
          return (
            <React.Fragment key={props.state}>
              <ul className="number">
                {Number.map(number => {
                  return <li key={number}>{number}</li>;
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

export default Code;
