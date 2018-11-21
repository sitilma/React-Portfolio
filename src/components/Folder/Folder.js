import React from "react";
import "./Folder.css";
import File from "../File/File";
class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className={"folder"}>
          <i className="fas fa-folder-open fa-folder" />
          <span>{this.props.name}</span>
        </div>
        <div className={"folderParent"}>
          {this.props.names.map(skill => {
            return (
              <React.Fragment key={skill.name}>
                <File name={skill.name} />
              </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Folder;
