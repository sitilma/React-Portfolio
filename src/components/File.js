import React from "react";
import "./File.css";

function File(props) {
  return <div onClick={props.onFileClick}>{props.name}</div>;
}

export default File;
