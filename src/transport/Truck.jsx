import React from "react";
import trucks from "./trucks";

function Truck() {
  return (
    <div>
      <h1>Truck Info</h1>

      {trucks.map((truck, index) => (
        <article key={index}>
          <img src={truck.url} height={150} width={200} />
          <h3>{truck.name}</h3>
          <p>{truck.color}</p>
        </article>
      ))}
    </div>
  );
}

export default Truck;
