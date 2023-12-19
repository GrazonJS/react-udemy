import { useState } from "react";
import "./App.css";
import ReducerBasics from "./components/ReducerBasics";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReducerBasics />
    </>
  );
}

export default App;
