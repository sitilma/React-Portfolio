import { ACTIVE, DELETEACTIVE } from "../actions";

const initialState = new Map([]);
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE:
      return state.set(action.index, action.lang);
    case DELETEACTIVE:
      state.delete(action.deletelang);
      return state;
    default:
      return state;
  }
};
