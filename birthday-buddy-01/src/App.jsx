import { useState } from "react";
import { value } from "./data";
import "./App.css";
import List from "./List";

function App() {
  const [clear, setClear] = useState(value);
  return (
    <main>
      <List />
      <button type="button" onClick={() => setClear([])}>
        clear all
      </button>
    </main>
  );
}

export default App;
