import React, { useState } from "react";

const InputComponent = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSubmittedValue(inputValue);
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  const handleClick = () => {
    setSubmittedValue(inputValue);
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>Submit</button>
      <p>Submitted Value: {submittedValue}</p>
    </div>
  );
};

export default InputComponent;
