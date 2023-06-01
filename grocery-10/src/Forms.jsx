import React, { useState } from "react";

function Forms({ addItem }) {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItemName);
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName("");
  };
  return (
    <section>
      <h2>GROCERY BUD</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </section>
  );
}

export default Forms;
