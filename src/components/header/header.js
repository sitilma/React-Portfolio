import React from "react";
import { connect } from "react-redux";
import { changeCode } from "../../actions";
import "./header.css";

function Header(props) {
  return (
    <div
      className={"header"}
      onClick={() => props.onHeaderClick(props.name)}
      title={props.name}
    >
      {props.name}
    </div>
  );
}

const mapStateToProps = state => ({ lang: state.lang });
const mapDispatchToProps = dispatch => ({
  onHeaderClick(lang) {
    dispatch(changeCode(lang));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
