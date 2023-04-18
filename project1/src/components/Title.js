import React from "react";

const Title = (props) => {
  return (
    <div className="section-title">
      <h2>
        {props.value} <span>{props.subvalue}</span>
      </h2>
    </div>
  );
};

export default Title;
