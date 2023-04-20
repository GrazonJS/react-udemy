import { useState } from "react";

const UseStateObject = () => {
  const [person, setperson] = useState({
    name: "peter",
    age: 24,
    hobby: "singing",
  });

  const displayPerson = () => {
    setperson({
      name: "MIKE",
      age: 24,
      hobby: "Scream at the computer",
    });
  };
  return <></>;
};

export default UseStateObject;
