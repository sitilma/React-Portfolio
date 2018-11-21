import { ACTIVE, DELETEACTIVE } from "../actions";

const initialState = new Map();
initialState.set("Contact", "Contact");
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE:
      return state.set(action.index, action.lang);
    case DELETEACTIVE:
      return state.delete(action.lang);
    default:
      return state;
  }
};
