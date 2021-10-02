import { SET_XML, SET_CODE } from "./workspaceTypes";

const initialState = {
  xml: `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`,
  code: "",
};

const WorkspaceReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_XML:
      return {
        ...state,
        xml: actions.payload.xml,
      };
    case SET_CODE:
      return { ...state, code: actions.payload.code };
    default:
      return state;
  }
};

export default WorkspaceReducer;
