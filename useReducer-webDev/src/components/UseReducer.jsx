import React, { useReducer } from "react";
import { data } from "./data";

function BasicReducer() {
  const [state, dispatch] = useReducer(reducer, { state: 0 });
  return <div></div>;
}

export default BasicReducer;
