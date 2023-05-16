import "./App.css";
import Title from "./Title";
import Menu from "./Menu";
import menu from "./data";
import { useState } from "react";
import Categories from "./Categories";

const categoryItem = new Set(menu.map((item) => item.category));
console.log(categoryItem);
const allCategories = ["all", ...categoryItem];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (selectedItem) => {
    console.log(selectedItem);
    if (selectedItem == "all") {
      setMenuItems(menu);
    } else {
      const filteredItems = menu.filter(
        (item) => item.category === selectedItem
      );
      setMenuItems(filteredItems);
    }
  };
  return (
    <main>
      <section>
        <Title text="ok" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu />
      </section>
    </main>
  );
}

export default App;
