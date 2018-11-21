export const LANG = "LANG";
export const ACTIVE = "ACTIVE";
export const DELETEACTIVE = "DELETEACTIVE";

export const changeCode = lang => ({ type: LANG, lang });
export const activeFile = lang => ({
  type: ACTIVE,
  index: lang,
  lang
});
export const deleteActiveFile = deletelang => ({
  type: DELETEACTIVE,
  deletelang
});
