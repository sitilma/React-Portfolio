import { ACTIVE, DELETEACTIVE } from "../actions";

// stateはES6のMapで管理する。
const initialState = new Map([]);
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE:
      return state.set(action.index, action.code);
    case DELETEACTIVE:
      state.delete(action.deletecode);
      return state;
    default:
      return state;
  }
};
