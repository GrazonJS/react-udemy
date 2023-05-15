import React from "react";
import menu from "./data";
import MenuItem from "./MenuItem";
function Menu() {
  return (
    <section>
      {menu.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...MenuItem} />;
      })}
    </section>
  );
}

export default Menu;
