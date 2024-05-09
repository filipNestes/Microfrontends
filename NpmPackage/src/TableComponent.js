import React, { useEffect, useState } from "react";
import "./tableComponent.css";

const TableComponent = ({ initialData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return (
    <div className="table-container">
      <h2>Npm Package Data Table</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
