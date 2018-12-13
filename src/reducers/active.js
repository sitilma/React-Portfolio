import { ACTIVE, DELETEACTIVE } from "../actions";

// stateはES6のMapで管理する。
export default (state = new Set([]), action) => {
  switch (action.type) {
    case ACTIVE:
      return state.add(action.activeFileName);
    case DELETEACTIVE:
      state.delete(action.deleteFileName);
      return state;
    default:
      return state;
  }
};
