import React from "react";
import "./Code.css";
import { Codes } from "./Codes";

function Code(props) {
  return (
    <div>
      {Codes.map(code => {
        if (code.id === props.state) {
          return code.body;
        }
        return null;
      })}
    </div>
  );
}

export default Code;
