import React from "react";
import "./head.css";
import Header from "../header/header";
import { connect } from "react-redux";
import { Headers } from "./headers";

function Head(props) {
  const newHeaders = [];

  // forEachとmapで繰り返し処理を行い、activeStateとHeaders.nameが一致すればnewHeadersに入れる。これによってクリック時headerが順番に増えていく。
  props.active.forEach(activeMapHeaders);
  function activeMapHeaders(key) {
    Headers.map(header => {
      if (key === header.name) {
        return newHeaders.push(header);
      }
      return null;
    });
  }

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
