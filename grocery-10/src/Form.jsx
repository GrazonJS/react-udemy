import React, { useEffect } from "react";
import { useState } from "react";

function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    console.log(newItemName);
    setNewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>GROCERY STORE</h4>
      <div>
        <input
          type="text"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

export default Form;
