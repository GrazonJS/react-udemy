import React from "react";
import { useState } from "react";

function Form() {
  const [color, setColor] = useState(0);
  const handleSubmit = (e) => {
    e.target.value;
  };
  console.log(color);
  return (
    <section className="container">
      <h3>Color generator</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          id=""
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="sibmit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
}

export default Form;
