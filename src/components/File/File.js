import React from "react";
import { connect } from "react-redux";
import { changeLangState } from "../../actions";
import "./File.css";

function File(props) {
  return (
    <div className={"file"} onClick={() => props.onClick(props.name)}>
      <div className={props.name} />
      {props.name}
    </div>
  );
}

const mapStateToProps = state => ({ lang: state.lang });
const mapDispatchToProps = dispatch => ({
  onClick(lang) {
    dispatch(changeLangState(lang));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(File);
