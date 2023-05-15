import React from "react";

function Title({ text }) {
  return (
    <div>
      <h2>{text || "default value"}</h2>
    </div>
  );
}

export default Title;
