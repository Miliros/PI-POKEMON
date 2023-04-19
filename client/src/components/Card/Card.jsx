import React from "react";

export default function Card({ name, image, types }) {
  console.log();

  return (
    <div>
      <h3>{name}</h3>
      {/* <h5>{type}</h5> */}
      <img src={image} alt={image} />

      {types && types.map((e, index) => <div key={index}>{e.name}</div>)}
    </div>
  );
}
