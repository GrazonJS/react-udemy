import React from "react";
import Duties from "./Duties";

function JobInfo({ jobs, currentItem }) {
  const { company, dates, duties, title } = jobs[currentItem];
  return (
    <article>
      <h3>{title}</h3>
      <span>{company}</span>
      <p>{dates}</p>
      <Duties duties={duties} />
    </article>
  );
}
export default JobInfo;
