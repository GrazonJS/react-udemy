import React from "react";
import { sublinks } from "./Data";
import { useGlobalContext } from "./context";

function Navlinks() {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId, page } = item;

        return (
          <ul key={pageId} className="nav-link">
            <button
              className="nav-button"
              onMouseEnter={() => setPageId(pageId)}
            >
              {page}
            </button>
          </ul>
        );
      })}
    </div>
  );
}

export default Navlinks;
