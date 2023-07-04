import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

function App() {
  const [items, setItems] = useState([]);
  console.log(items);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    const newItem = items.filter((item) => item.id !== itemId);
    setItems(newItem);
    setLocalStorage(newItem);
  };

  return (
    <>
      <Form addItem={addItem} />
      <h5>Items</h5>
      <Items items={items} removeItem={removeItem} />
    </>
  );
}

export default App;
