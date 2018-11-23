import React from "react";
import { connect } from "react-redux";
import { changeCode } from "../../actions";
import { deleteActiveFile } from "../../actions";
import { Headers } from "./headers";
import "./header.css";

function Header(props) {
  const CODENAME = props.lang.codeName;
  const activeHeader = document.getElementById(props.name + "Header");
  const activeValue = props.active.values();
  const nextlang = activeValue.next().value;
  const newHeaders = [];
  props.active.forEach(activeMapHeaders);
  function activeMapHeaders(key) {
    Headers.map(header => {
      if (key === header.name) {
        return newHeaders.push(header);
      }
      return null;
    });
  }
  function onCloseClick(currentlang) {
    props.deleteCodeName(currentlang, CODENAME);
    if (CODENAME === currentlang) {
      const newlang =
        CODENAME === nextlang ? activeValue.next().value : nextlang;
      props.newCodeName(newlang);
    }
  }
  console.log(newHeaders);
  if (CODENAME === props.name) {
    if (activeHeader) {
      activeHeader.classList.add("activeHeader");
    }
  } else {
    if (activeHeader) {
      activeHeader.classList.remove("activeHeader");
    }
  }
  return (
    <React.Fragment>
      {newHeaders.map(header => {
        return (
          <div
            className={"header"}
            title={header.info}
            id={header.name + "Header"}
            key={header.name}
          >
            {header.name}
            <span id={"close"} onClick={() => onCloseClick(header.name)}>
              ×
            </span>
          </div>
        );
      })}
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
