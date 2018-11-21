import React from "react";
import { connect } from "react-redux";
import { changeCode } from "../../actions";
import "./file.css";

function File(props) {
  return (
    <div className={"file"} onClick={() => props.onFileClick(props.name)}>
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
