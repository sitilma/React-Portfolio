import { LANG } from "../actions";

const initialState = { codeName: "Readme" };

export default (state = initialState, action) => {
  switch (action.type) {
    case LANG:
      return { lang: action.lang };
    default:
      return state;
  }
};
