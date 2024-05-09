import React, { useState } from "react";
import { TableComponent } from "npmpackage";
import "./npmContent.scss";

const NpmPackagePage = () => {
  const [inputData, setInputData] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddData = () => {
    setTableData((prev) => [...prev, inputData]);
    setInputData("");
  };

  return (
    <div className="npm-content">
      <label htmlFor="dataInput">Text to Npm package:</label>
      <input
        id="dataInput"
        value={inputData}
        onChange={handleInputChange}
        placeholder="Enter new data"
      />
      <button onClick={handleAddData}>Add Data to Table</button>
      <div>
        <TableComponent initialData={tableData} />
      </div>
    </div>
  );
};

export default NpmPackagePage;
