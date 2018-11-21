import React from "react";
import { connect } from "react-redux";
import { changeCode } from "../../actions";
import { deleteActiveFile } from "../../actions";
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
    <React.Fragment>
      {Headers.map(header => {
        if (props.active.get(header.name)) {
          return (
            <div
              className={"header"}
              onClick={() => props.onHeaderClick(header.name)}
              title={header.info}
              id={header.name + "Header"}
              key={header.name}
            >
              {header.name}
              <span
                id={"close"}
                onClick={() => props.onCloseClick(header.name)}
              >
                ×
              </span>
            </div>
          );
        }
        return null;
      })}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({ lang: state.lang, active: state.active });
const mapDispatchToProps = dispatch => ({
  onHeaderClick: lang => {
    dispatch(changeCode(lang));
  },
  onCloseClick: lang => {
    dispatch(deleteActiveFile(lang));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
