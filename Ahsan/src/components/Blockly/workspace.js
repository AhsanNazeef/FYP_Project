import React from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import { useDispatch, useSelector } from "react-redux";
import { setCode, setXML } from "../../redux/Workspace/workspaceActions";
import Layout from "../Layout/Layout";

function Workspace() {
  const initialXml = useSelector((state) => state.workspace.xml);
  const javascriptCode = useSelector((state) => state.workspace.code);
  const dispatch = useDispatch();

  const workspaceDidChange = (workspace) => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    dispatch(setCode(code));
  };

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
        ],
      },
      {
        kind: "category",
        name: "Math",
        colour: "#5CA65C",
        contents: [
          {
            kind: "block",
            type: "math_round",
          },
          {
            kind: "block",
            type: "math_number",
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={(xml) => {
          dispatch(setXML(xml));
        }}
      />
      <button onClick={() => console.log(javascriptCode)}>Generate Code</button>
    </Layout>
  );
}

export default Workspace;
