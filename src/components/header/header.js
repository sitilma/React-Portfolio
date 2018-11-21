import React from "react";
import { connect } from "react-redux";
import { changeCode } from "../../actions";
import { Headers } from "./headers";
import "./header.css";

function Header(props) {
  const activeHeader = document.getElementById(props.name + "Header");
  if (props.lang.codeName === props.name) {
    if (activeHeader) {
      activeHeader.classList.add("activeHeader");
    }
  } else {
    if (activeHeader) {
      activeHeader.classList.remove("activeHeader");
    }
  }
  return (
    <div
      className={"header"}
      onClick={() => props.onHeaderClick(props.name)}
      title={props.name}
      id={props.name + "Header"}
    >
      {props.name}
    </div>
  );
}

const mapStateToProps = state => ({ lang: state.lang, active: state.active });
const mapDispatchToProps = dispatch => ({
  onHeaderClick(lang) {
    dispatch(changeCode(lang));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
