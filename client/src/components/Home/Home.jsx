import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, removeState } from "../../redux/actions";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import Paginado from "../Paginado/Paginado";
import styles from "./Home.module.css";
import { Orbit } from "@uiball/loaders";

export default function Home() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const allPokemons = useSelector((state) => state.pokemons);
  const [checkState, setCheckState] = useState(false); // para poder limpiar mi estado
  const [currentPage, setcurrentPage] = useState(1); // estado local con la primer pag que se renderiza
  const [pokemonsPerPage] = useState(12); // seteo cuantos poke tengo por pag
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;

  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  ); // que personajes renderizo dep de la pag

  const paginado = (pageNumber) => {
    // seteando la pag en el numero que yo voy rend
    setcurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    if (error.message) {
      alert(error.message);
      dispatch(removeState());
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (checkState === true) {
      setCheckState(false);
    }
  }, [checkState]);

  return (
    <div>
      <SearchBar />
      <div className={styles.divHomeOne}>
        <div className={styles.divFiltro}></div>
        <Filters setCheckState={setCheckState} />

        <div className={styles.divHome}>
          {allPokemons.length > 0 ? (
            currentPokemons.map((el, index) => (
              <div key={index}>
                <Card
                  name={el.name}
                  image={el.image}
                  types={el.types}
                  id={el.id}
                />
              </div>
            ))
          ) : (
            <div className={styles.loading}>
              <Orbit size={35} color="#231F20" />
            </div>
          )}
        </div>

        <div>
          <Paginado
            pokemonsPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}
