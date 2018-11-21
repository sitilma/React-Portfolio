import { LANG } from "../actions";

const initialState = { codeName: "README" };

export default (state = initialState, action) => {
  switch (action.type) {
    case LANG:
      return { codeName: action.lang };
    default:
      return state;
  }
};
