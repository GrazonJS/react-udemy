import React from "react";
import { nanoid } from "nanoid";

function Items({ items }) {
  return (
    <h4>
      {items.map((item) => {
        return (
          <div key={nanoid()}>
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </h4>
  );
}

export default Items;
