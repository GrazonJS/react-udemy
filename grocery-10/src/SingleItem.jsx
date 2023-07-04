import React from "react";
import { useState } from "react";

function SingleItem({ item, removeItem }) {
  const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p style={{ textDecoration: isChecked && "line-through" }}>{item.name}</p>
      <button type="button" onClick={() => removeItem(item.id)}>
        Delete
      </button>
    </div>
  );
}

export default SingleItem;
