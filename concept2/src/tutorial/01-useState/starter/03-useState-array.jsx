import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const clearAllItems = () => {
    setPeople([]);
  };
  const removeItems = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>

            <button onClick={removeItems(id)}>remove</button>
          </div>
        );
      })}
      <br />
      <button type="button" className="btn">
        Clear items
      </button>
    </div>
  );
};

export default UseStateArray;
