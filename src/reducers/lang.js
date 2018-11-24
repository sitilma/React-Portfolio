import { LANG } from "../actions";

const initialState = { codeName: undefined };

export default (state = initialState, action) => {
  switch (action.type) {
    case LANG:
      return { codeName: action.lang };
    default:
      return state;
  }
};
