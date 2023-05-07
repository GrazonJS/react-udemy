import React from "react";

function Tour(props, removeTour) {
  return (
    <article>
      <img src={props.image} alt={props.name} style={{ height: "400px" }} />
      <span>${props.price}</span>
      <div>
        <h3>{props.name}</h3>
        <p>{props.info}</p>
      </div>
      <button onClick={() => removeTour(id)}>Remove Item</button>
    </article>
  );
}

export default Tour;
