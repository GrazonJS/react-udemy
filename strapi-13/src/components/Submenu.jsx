import React from "react";
import { sublinks } from "./Data";
import { useGlobalContext } from "./context";
function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const handleMouseLeave = (event) => {
    setPageId(null);
  };
  console.log(currentPage);
  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { url, icon, label, id } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
