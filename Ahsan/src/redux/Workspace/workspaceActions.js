import { SET_CODE, SET_XML } from "./workspaceTypes";

export const setXML = (xml) => {
  return {
    type: SET_XML,
    payload: { xml },
  };
};

export const setCode = (code) => {
  return {
    type: SET_CODE,
    payload: { code },
  };
};
