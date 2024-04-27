import React, { useState } from "react";

export default function MiniReactApp() {
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
    <div>
      <input value={inputValue} onChange={handleInputChange} />
    </div>
  );
}
