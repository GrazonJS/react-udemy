import React from "react";
import Duties from "./Duties";

function JobInfo(props) {
  const { company, dates, duties, title } = props.jobs;
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
