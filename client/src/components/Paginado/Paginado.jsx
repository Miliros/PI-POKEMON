import React from "react";
import styles from "./Paginado.module.css";

export default function Paginado({
  pokemonsPerPage,
  allPokemons,
  paginado,
  currentPage,
}) {
  const pageNumbers = [];

  console.log(currentPage);

  for (let i = 0; i < Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div className={styles.paginado}>
      {pageNumbers &&
        pageNumbers.map((number, index) => (
          <button
            style={{
              backgroundColor: currentPage === index + 1 && "black",
              color: currentPage === index + 1 && "white",
            }}
            key={number}
            className={styles.number}
            onClick={() => paginado(number)}
          >
            {number}
          </button>
        ))}
    </div>
  );
}
