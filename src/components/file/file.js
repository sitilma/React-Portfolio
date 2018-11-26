import React from "react";
import { connect } from "react-redux";
import { changeCode } from "../../actions";
import { activeFile } from "../../actions";
import "./file.css";

function File(props) {
  // 現在のcodeStateとprops.nameが一致したidにactiveFileクラスを与える。
  const activeFile = document.getElementById(props.name + "File");
  if (props.code.codeName === props.name) {
    if (activeFile) {
      activeFile.classList.add("activeFile");
    }
  } else {
    if (activeFile) {
      activeFile.classList.remove("activeFile");
    }
  }

  // fileComponentのreturn
  return (
    <div
      className={"file"}
      onClick={() => props.onFileClick(props.name)}
      id={props.name + "File"}
      title={props.info}
    >
      <div className={props.name} />
      {props.name}
    </div>
  );
}

// Stateの受け取りと実行
const mapStateToProps = state => ({ code: state.code, active: state.active });
const mapDispatchToProps = dispatch => ({
  onFileClick(code) {
    dispatch(changeCode(code));
    dispatch(activeFile(code));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(File);
