import React, { useState, createContext } from "react";
import NavLinks from "./NavLinks";
import { useContext } from "react";

export const navbarContext = createContext();

//custom hook
export const useAppContext = () => useContext(navbarContext);

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
