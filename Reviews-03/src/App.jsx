import { useEffect, useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = reviews[index];
  console.log(reviews.length);

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (newIndex > reviews.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };

  const previousPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return reviews.length - 1;
      }
      return newIndex;
    });
  };
  const randomPerson = () => {
    setIndex(() => {
      const newIndex = Math.floor(Math.random() * reviews.length);
      return newIndex;
    });
  };
  return (
    <>
      <main>
        <section>
          <div className="img-container">
            <img src={image} alt={name} />
            <span>
              <FaQuoteRight />
            </span>
          </div>
          <h4>{name}</h4>
          <p className="job">{job}</p>
          <p className="text">{text}</p>{" "}
          <div>
            <button onClick={previousPerson}>
              <FaChevronLeft />
            </button>
            <button onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button onClick={randomPerson}>Random</button>
        </section>
      </main>
    </>
  );
}

export default App;
