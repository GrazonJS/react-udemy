import { useState } from "react";
import "./App.css";
import ControlledInputs from "./ControlledInputs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Leverage JavaScript</h2>
      <ControlledInputs />
    </>
  );
}

export default App;
