import React from "react";
import "./head.css";
import Header from "../header/header";
import { connect } from "react-redux";
import { Codes } from "../codes";

function Head(props) {
  const newHeaders = [];

  props.active.forEach(key => {
    Codes.map(header => {
      if (key === header.name) {
        return newHeaders.push(header);
      }
      return null;
    });
  });

  return (
    <div id={"header"}>
      {newHeaders.map(header => {
        return (
          <React.Fragment key={header.name}>
            <Header name={header.name} info={header.info} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
const mapStateToProps = state => ({ code: state.code, active: state.active });
export default connect(mapStateToProps)(Head);
