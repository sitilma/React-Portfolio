import React from "react";
import { connect } from "react-redux";
import { changeCode } from "../../actions";
import { deleteActiveFile } from "../../actions";
import "./header.css";

function Header(props) {
  const CODENAME = props.lang.codeName;
  const activeValue = props.active.values();
  const nextlang = activeValue.next().value;

  function onCloseStop(e) {
    e.stopPropagation();
    onCloseClick(props.name);
  }
  function onCloseClick(currentlang) {
    props.deleteCodeName(currentlang, CODENAME);
    if (CODENAME === currentlang) {
      const newlang =
        CODENAME === nextlang ? activeValue.next().value : nextlang;
      props.newCodeName(newlang);
    }
  }

  return (
    <React.Fragment>
      <div
        className={"header activeHeader"}
        title={props.info}
        id={props.name + "Header"}
        onClick={() => props.onHeaderClick(props.name)}
      >
        <span
          className={"close"}
          id={props.name + "close"}
          onClick={onCloseStop}
        >
          ×
        </span>
        {props.name}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({ lang: state.lang, active: state.active });
const mapDispatchToProps = dispatch => ({
  onHeaderClick: lang => {
    dispatch(changeCode(lang));
  },
  deleteCodeName: (currentlang, currentCodeName) => {
    dispatch(deleteActiveFile(currentlang));
    dispatch(changeCode(currentCodeName));
  },
  newCodeName: newlang => {
    dispatch(changeCode(newlang));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
