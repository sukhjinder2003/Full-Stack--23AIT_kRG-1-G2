import React, { useState } from "react";

function BasicForm() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue);
    console.log("Submitted Value:", inputValue);
  };

  return (
    <div>
      <h2>Basic React Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {submittedValue && <p>Last Submitted: {submittedValue}</p>}
    </div>
  );
}

export default BasicForm;