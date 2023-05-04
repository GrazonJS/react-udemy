import React from "react";
import { value } from "./data";

function List() {
  return (
    <section>
      <h1>{value.length} Birthday Today</h1>
      <div>
        {value.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.age}</p>
              </div>
            </li>
          );
        })}
      </div>
    </section>
  );
}

export default List;
