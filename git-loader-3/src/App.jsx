import { useState } from "react";
import { Loader } from "./Loader";
import Model from "./Model";

import "./App.css";

function App() {
  const [inputLink, setInputLink] = useState("");

  const handleInputChange = (event) => {
    setInputLink(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputLink);
    Loader(inputLink);
  };
  return (
    <>
      <h2>REPO</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputLink}
          onChange={handleInputChange}
          placeholder="Enter repo link"
        />
        <button type="submit">Submit</button>
      </form>
      <Model />
    </>
  );
}

export default App;
