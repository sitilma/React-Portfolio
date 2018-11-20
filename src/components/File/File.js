import React from "react";
import "./File.css";

function File(props) {
  return (
    <div className={"file"} onClick={props.onFileClick}>
      <div className={props.name} />
      {props.name}
    </div>
  );
}

export default File;
