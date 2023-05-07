import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour, fetchTours }) => {
  const keysArray = Object.keys(tours);
  const length = keysArray.length;
  if (length == 0) {
    return (
      <div>
        <h3>No tours left</h3>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
