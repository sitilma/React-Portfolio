export const CODE = "CODE";
export const ACTIVE = "ACTIVE";
export const DELETEACTIVE = "DELETEACTIVE";

export const changeCode = codeName => ({ type: CODE, codeName });
export const activeFile = activeFileName => ({ type: ACTIVE, activeFileName });
export const deleteActiveFile = deleteFileName => ({
  type: DELETEACTIVE,
  deleteFileName
});
