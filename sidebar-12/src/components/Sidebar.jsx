import React from "react";
import logo from "../logo.svg";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { links, social } from "./data";
function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={isSidebarOpen ? " show-sidebar" : "sidebar"}>
      <section className="sidebar show-sidebar">
        <div className="sidebar-header">
          <img src={logo} alt="coding-addict" className="logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, icon, text } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social-links">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Sidebar;
