import React, { useState } from "react";
import "./miniReactApp.scss";

export default function MiniAppInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    const eventDetail = new CustomEvent("fromReact", {
      detail: { message: newValue },
    });
    window.dispatchEvent(eventDetail);
  };

  return (
    <div className="input-group">
      <label htmlFor="text-input">Message from React Input:</label>
      <input
        type="text"
        id="text-input"
        placeholder="Insert text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
