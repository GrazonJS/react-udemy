import { useState } from "react";
import "./App.css";
import Forms from "./Forms";
import Items from "./Items";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState([]);
  const addItem = (newItemName) => {
    const newItem = {
      name: newItemName,
      completed: false,
      id: nanoid(),
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };
  console.log(items);
  return (
    <main>
      <Forms addItem={addItem} />
      <Items items={items} />
    </main>
  );
}

export default App;
