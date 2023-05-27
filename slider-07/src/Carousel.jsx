import React from "react";
import { useState } from "react";
import { shortList, longList } from "./data";

function Carousel() {
  const [people, setpeople] = useState(longList);
  return (
    <div>
      {people.map((person) => {
        const { id, image, name, title, quote } = person;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <span>{title} </span>
            <p>{quote}</p>
          </article>
        );
      })}
    </div>
  );
}

export default Carousel;
