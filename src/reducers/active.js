import { ACTIVE, DELETEACTIVE } from "../actions";

// stateはES6のMapで管理する。
const initialState = new Set([]);
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE:
      return state.add(action.code);
    case DELETEACTIVE:
      state.delete(action.deletecode);
      return state;
    default:
      return state;
  }
};
