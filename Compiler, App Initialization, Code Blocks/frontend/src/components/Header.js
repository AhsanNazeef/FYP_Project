// Library Imports
import React from "react";
import DropDown from "react-dropdown";

import "./styles.css";

const Header = ({ onChangeLanguage, value, runCode, status }) => {
  const options = [
    { value: "java", label: "Java" },
    { value: "python", label: "Python 3" },
    { value: "cpp17", label: "C/C++" },
  ];
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h2>Code Compiler</h2>
      <center>
        <div style={{textAlign: 'left', marginBottom: '2px'}}>
          <DropDown
            onChange={onChangeLanguage}
            className="nm"
            options={options}
            value={value}
            placeholder="Select an option"
          />
          <button
            onClick={() => runCode()}
            disabled={status === "Run" ? false : true}
            className="customButton"
          >
            {status}
          </button>
        </div>
      </center>
    </div>
  );
};

export default Header;
