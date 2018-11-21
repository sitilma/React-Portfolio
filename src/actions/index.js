export const LANG = "LANG";
export const ACTIVE = "ACTIVE";
export const INACTIVE = "INACTIVE";

export const changeCode = lang => ({ type: LANG, lang });
export const activeFile = active => ({ type: ACTIVE, active });
export const inactiveFile = inactive => ({ type: INACTIVE, inactive });
