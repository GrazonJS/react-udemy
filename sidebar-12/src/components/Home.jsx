import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

function Home() {
  const { openSidebar, openModel } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModel} className="btn">
        Show Model
      </button>
    </main>
  );
}

export default Home;
