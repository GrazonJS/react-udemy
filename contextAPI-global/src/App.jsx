import { useState } from "react";
import "./App.css";
import { useGlobalContext } from "./components/Context";
function App() {
  const { name, setName } = useGlobalContext();

  console.log(name);

  return (
    <>
      <p>hello</p>
    </>
  );
}

export default App;
