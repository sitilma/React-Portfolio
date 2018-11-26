export const CODE = "CODE";
export const ACTIVE = "ACTIVE";
export const DELETEACTIVE = "DELETEACTIVE";

export const changeCode = code => ({ type: CODE, code });
export const activeFile = code => ({
  type: ACTIVE,
  index: code,
  code
});
export const deleteActiveFile = deletecode => ({
  type: DELETEACTIVE,
  deletecode
});
