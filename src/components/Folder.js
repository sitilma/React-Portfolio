import React from "react";
import "./Folder.css";
import File from "./File";

function Folder(props) {
  let Files = [];
  switch (props.id) {
    case "skill":
      Files = SKILL;
      break;
    case "work":
      Files = WORK;
      break;
    default:
      break;
  }
  return (
    <div id={props.id}>
      {Files.map((item, index) => {
        return <File name={item.name} onClick={props.fileClick} key={index} />;
      })}
    </div>
  );
}

const SKILL = [
  { name: "ruby" },
  { name: "php" },
  { name: "javascript" },
  { name: "docker" }
];

const WORK = [
  { name: "igo" },
  { name: "markdown" },
  { name: "portfolio" },
  { name: "laravel" }
];
export default Folder;
