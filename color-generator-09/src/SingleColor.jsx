import React from "react";

function SingleColor({ color, index }) {
  console.log(color);
  const { hex, weight } = color;
  return (
    <article style={{ background: `#${hex}` }}>
      #{hex} <br />
      {weight}%
    </article>
  );
}

export default SingleColor;
