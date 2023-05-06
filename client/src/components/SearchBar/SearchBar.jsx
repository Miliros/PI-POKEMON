import { useState } from "react";
import { getPokemons, removeState } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";
import { useLocation } from "react-router-dom";
import logo from "../../logo.png";

export default function SearchBar() {
  const [pokeName, setPokeName] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = (e) => {
    setPokeName(e.target.value);
  };
  const handleOnClick = () => {
    dispatch(getPokemons(pokeName));
  };

  return (
    <div className={styles.searchBardiv}>
      <div className={styles.cntLinks}>
        <img className={styles.logo} src={logo} alt="logo" />
        <Link
          className={styles.link}
          to="/home"
          onClick={() => dispatch(removeState())}
        >
          <p className={styles.createdAndHome}> Home</p>
        </Link>{" "}
        <Link className={styles.link} to="/create" >
          <p className={styles.createdAndHome}> Create Pokemon</p>
        </Link>{" "}
      </div>

      {location.pathname === "/home" && (
        <div>
          <input
            className={styles.inputSearb}
            placeholder="Search by name..."
            type="search"
            onChange={handleChange}
          />
          <button
            className={styles.buttonAdd}
            type="submit"
            onClick={handleOnClick}
          >
            search
          </button>
        </div>
      )}
    </div>
  );
}
