import React from "react";
import "./folder.css";
import File from "../file/file";

function Folder(props) {
  const folderName = props.name;

  function folderHiddenSet() {
    if (document.getElementById(folderName)) {
      folderHidden();
      folderChangeIcon();
    }
  }

  function folderHidden() {
    let fileParentElement = document.getElementById(folderName)
      .lastElementChild;
    fileParentElement.classList.toggle("none");
  }

  function folderChangeIcon() {
    let folderElement = document.getElementById(folderName).firstElementChild
      .firstElementChild;
    folderElement.classList.toggle("fa-folder-open");
  }

  return (
    <div id={folderName}>
      <div className={"folder"} onClick={() => folderHiddenSet()}>
        <i className="fas fa-folder-open fa-folder" />
        <span>{folderName}</span>
      </div>
      <div className={"fileParent"}>
        {props.files.map(file => {
          return (
            <React.Fragment key={file.name}>
              <File name={file.name} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Folder;
