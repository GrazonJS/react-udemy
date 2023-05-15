import React from "react";

function MenuItem(props) {
  return (
    <article>
      <img src={props.img} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <span>${props.price}</span>
      </div>
    </article>
  );
}

export default MenuItem;
