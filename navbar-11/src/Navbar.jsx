import React, { useState } from "react";
import logo from "./assets/react.svg";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showLink, setShowLink] = useState(false);
  const toggleLinks = () => {
    setShowLink(!showLink);
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
