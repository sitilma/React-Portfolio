import { CODE } from "../actions";

// 初期値はundefined
const initialState = { codeName: undefined };
export default (state = initialState, action) => {
  switch (action.type) {
    case CODE:
      return { codeName: action.code };
    default:
      return state;
  }
};
