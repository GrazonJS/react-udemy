import React from "react";

function BtnContainer({ jobs, setCurrentItem, currentItem }) {
  return (
    <article>
      {jobs.map((item, index) => {
        return (
          <button key={item.id} onClick={() => setCurrentItem(index)}>
            {item.company}
          </button>
        );
      })}
    </article>
  );
}

export default BtnContainer;
