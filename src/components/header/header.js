import React from "react";
import { connect } from "react-redux";
import { changeCode } from "../../actions";
import { deleteActiveFile } from "../../actions";
import "./header.css";

function Header(props) {
  const CODENAME = props.code.codeName;
  const activeValue = props.active.values();
  const nextcode = activeValue.next().value;
  const headerWidth = 100 / props.active.size + "%";

  // 子要素がクリックされても親のClickEventは発火しないように。
  function onCloseClick(e) {
    e.stopPropagation();
    closeClickEvent(props.name);
  }

  // dispatchに渡す。activeStateから削除し、現在のCodeがprops.nameと一致すればcodeを変更する。
  function closeClickEvent(currentcode) {
    props.deleteActiveFile(currentcode, CODENAME);
    newCodeEvent(currentcode);
  }
  // ActiveStateの中身がまだ存在すればそれを新しいCodeStateにする。
  function newCodeEvent(currentcode) {
    if (CODENAME === currentcode) {
      const newcode =
        CODENAME === nextcode ? activeValue.next().value : nextcode;
      props.newCodeName(newcode);
    }
  }

  return (
    <React.Fragment>
      <div
        className={"header"}
        title={props.info}
        id={props.name + "Header"}
        onClick={() => props.onHeaderClick(props.name)}
        style={{ width: headerWidth }}
      >
        <div className={"headerName"}>{props.name}</div>
        <span
          className={"close"}
          id={props.name + "close"}
          onClick={onCloseClick}
        >
          ×
        </span>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({ code: state.code, active: state.active });
const mapDispatchToProps = dispatch => ({
  onHeaderClick: code => {
    dispatch(changeCode(code));
  },

  // 引数のActiveStateを削除し、CodeStateを変更する
  deleteActiveFile: (currentcode, currentCodeName) => {
    dispatch(deleteActiveFile(currentcode));
    dispatch(changeCode(currentCodeName));
  },

  // ActiveStateの中身がまだ存在すればそれを新しいCodeStateにする。
  newCodeName: newcode => {
    dispatch(changeCode(newcode));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
