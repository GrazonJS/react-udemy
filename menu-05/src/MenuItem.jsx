import React from "react";

function MenuItem({ img, title, price, desc }) {
  return (
    <article>
      <img src={img} alt={title} />
      <div>
        <h2>{title}</h2>
        <span>${price}</span>
        <p>{desc}</p>
      </div>
    </article>
  );
}

export default MenuItem;
