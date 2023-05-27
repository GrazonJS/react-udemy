import { useState } from "react";
import data from "./data";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(count);
    const amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <main>
      <h2>Try boring lorum ipsum</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">ANYTHING</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          min="1"
          step="1"
          max="8"
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">Generate</button>
      </form>
      <span></span>
      <div>
        {text.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <br />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
