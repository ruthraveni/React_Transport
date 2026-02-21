import React from "react";
import bikes from "./bikes";

function Bike() {
  return (
    <div>
      <h1>Bike Info</h1>

      {bikes.map((bike, index) => (
        <article key={index}>
          <img src={bike.url} height={150} width={200} />
          <h3>{bike.name}</h3>
          <p>{bike.color}</p>
        </article>
      ))}
    </div>
  );
}

export default Bike;
