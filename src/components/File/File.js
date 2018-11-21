import React from "react";
import { connect } from "react-redux";
import { changeCode } from "../../actions";
import "./file.css";

function File(props) {
  const activeFile = document.getElementById(props.name + "File");
  if (props.lang.codeName === props.name) {
    if (activeFile) {
      activeFile.classList.add("activeFile");
    }
  } else {
    if (activeFile) {
      activeFile.classList.remove("activeFile");
    }
  }
  return (
    <div
      className={"file"}
      onClick={() => props.onFileClick(props.name)}
      id={props.name + "File"}
    >
      <div className={props.name} />
      {props.name}
    </div>
  );
}

const mapStateToProps = state => ({ lang: state.lang });
const mapDispatchToProps = dispatch => ({
  onFileClick(lang) {
    dispatch(changeCode(lang));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(File);
