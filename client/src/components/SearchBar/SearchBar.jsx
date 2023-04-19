import { useState } from "react";
import { getPokemons } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const [pokeName, setPokeName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPokeName(e.target.value);
  };
  const handleOnClick = () => {
    dispatch(getPokemons(pokeName));
  };

  return (
    <div>
      <input
        placeholder="Buscar por nombre..."
        type="search"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleOnClick}>
        buscar
      </button>
    </div>
  );
}
