import React from "react";
import { connect } from "react-redux";
import { changeLangState } from "../../actions";
import "./File.css";

function File(props) {
  function send(e) {
    props.onClick(props.name);
  }

  return (
    <div className={"file"} onClick={send.bind()}>
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
