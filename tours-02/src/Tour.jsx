import React, { useState } from "react";

function Tour(props) {
  const [readMore, setReadMore] = useState(false);
  console.log(props.info.substring(1, 10));
  return (
    <article>
      <img src={props.image} alt={props.name} style={{ height: "400px" }} />
      <span>${props.price}</span>
      <div>
        <h3>{props.name}</h3>
        <p>{readMore ? props.info : props.info.substring(1, 100)}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Show More"}
        </button>
      </div>
      <button onClick={() => props.removeTour(props.id)}>Remove Item</button>
    </article>
  );
}

export default Tour;
