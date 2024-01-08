import { useState } from "react";
import "./App.css";
import { LowerStateChallenge } from "./Index";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <LowerStateChallenge />
    </>
  );
}

export default App;
