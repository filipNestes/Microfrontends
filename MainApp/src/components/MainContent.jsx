import React, { useState } from "react";
import { sendData, fetchData } from "../api.js";

const MyComponent = () => {
  const [inputData, setInputData] = useState("");
  const [category, setCategory] = useState("books");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendData(category, { title: inputData });
      alert("Data sent successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        type="text"
        placeholder="Add new book"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MyComponent;
