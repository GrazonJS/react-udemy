import React, { useState, createContext, useContext } from "react";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

function AppContext({ children }) {
  const [name, setName] = useState("peter");
  return (
    <div>
      <globalContext.Provider value={{ name, setName }}>
        {children}
      </globalContext.Provider>
    </div>
  );
}

export default AppContext;
