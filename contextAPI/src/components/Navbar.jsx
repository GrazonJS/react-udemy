import React, { useState, createContext } from "react";
import NavLinks from "./NavLinks";

export const navbarContext = createContext();

function Navbar() {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <navbarContext.Provider value={{ user, logout }}>
      <nav>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </navbarContext.Provider>
  );
}

export default Navbar;
