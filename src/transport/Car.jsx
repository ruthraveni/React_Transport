import React from "react";
import cars from "./cars";

function Car() {
  return (
    <div>
      <h1>Car Info</h1>

      {cars.map((car, index) => (
        <article key={index}>
          <img src={car.url} height={150} width={200} />
          <h3>{car.name}</h3>
          <p>{car.color}</p>
        </article>
      ))}
    </div>
  );
}

export default Car;
