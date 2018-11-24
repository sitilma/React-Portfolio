import React from "react";
import { connect } from "react-redux";
import { changeCode } from "../../actions";
import { deleteActiveFile } from "../../actions";
import "./header.css";

function Header(props) {
  const CODENAME = props.lang.codeName;
  const activeHeader = document.getElementById(props.name + "Header");
  const activeValue = props.active.values();
  const nextlang = activeValue.next().value;

  function onCloseClick(e) {
    e.stopPropagation();
    onCloseClickb("readme");
  }
  function onCloseClickb(currentlang) {
    props.deleteCodeName(currentlang, CODENAME);
    if (CODENAME === currentlang) {
      const newlang =
        CODENAME === nextlang ? activeValue.next().value : nextlang;
      props.newCodeName(newlang);
    }
  }

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
    <div>
      <div
        className={"header"}
        title={props.info}
        id={props.name + "Header"}
        onClick={() => props.onHeaderClick(props.name)}
      >
        <span
          className={"close"}
          id={props.name + "close"}
          onClick={() => onCloseClick(props.name)}
        >
          ×
        </span>
        {props.name}
      </div>
    </div>
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
