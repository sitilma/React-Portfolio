import React from "react";
import "./Folder.css";

function File(props) {
  return (
    <div>
      <div className={"folder"}>
        <i className="fas fa-folder-open fa-folder" />
        <span>Skill</span>
      </div>
      <div className={"folderParent"}>
        {SKILL.map(skill => {
          return (
            <React.Fragment key={skill.name}>
              <File name={skill.name} onFileClick={props.onFileClick} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

const SKILL = [
  { name: "Ruby" },
  { name: "PHP" },
  { name: "JavaScript" },
  { name: "Docker" }
];

export default File;
