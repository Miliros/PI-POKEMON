import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import Paginado from "../Paginado/Paginado";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [checkState, setCheckState] = useState(false); // para poder limpiar mi estado

  const [currentPage,setcurrentPage]= useState(1); // estado local con la primer pag que se renderiza
  const [pokemonsPerPage,setPokemonsPerpage] = useState(12); // seteo cuantos poke tengo por pag
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon); // que personajes renderizo dep de la pag
 
 
  const paginado = (pageNumber) =>{ // seteando la pag en el numero que yo voy rend
    setcurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    if (checkState === true) {
      setCheckState(false);
    }
  }, [checkState]);

  return (
    <div>
      <h1>POKE</h1>

      <SearchBar />

      <Filters setCheckState={setCheckState} />
      <Paginado
      pokemonsPerPage={pokemonsPerPage}
      allPokemons={allPokemons.length}
      paginado={paginado} />

      {allPokemons.length > 0 ? (
        currentPokemons.map((el, index) => (
          <div key={index}>
            <Card name={el.name} image={el.image} types={el.types} />
          </div>
        ))
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
}
