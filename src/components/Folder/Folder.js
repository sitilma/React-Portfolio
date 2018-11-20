import React from "react";
import "./Folder.css";
import File from "../File/File";
class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickButton() {
    return this.props.onFileClick();
  }

  render() {
    return (
      <div>
        <div className={"folder"}>
          <i className="fas fa-folder-open fa-folder" />
          <span>Skill</span>
        </div>
        <div className={"folderParent"}>
          {this.props.names.map(skill => {
            return (
              <React.Fragment key={skill.name}>
                <File name={skill.name} onFileClick={this.props.onFileClick} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}
// function Folder(props) {
// return (
//   <div>
//     <div className={"folder"}>
//       <i className="fas fa-folder-open fa-folder" />
//       <span>Skill</span>
//     </div>
//     <div className={"folderParent"}>
//       {props.names.map(skill => {
//         return (
//           <React.Fragment key={skill.name}>
//             <File name={skill.name} onFileClick={props.onFileClick} />
//           </React.Fragment>
//         );
//       })}
//     </div>
//   </div>
// );
// }

export default Folder;
