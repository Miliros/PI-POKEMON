import React, { useState, useEffect } from "react";
import { validation } from "./validation";
import { createPoke, getTypes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./Form.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Form() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const history = useHistory();

  const [userData, setUserData] = useState({
    name: "",
    image: "",
    life: "",
    stroke: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const [error, setError] = useState({
    name: "",
    image: "",
    life: "",
    stroke: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const stateReset = () => {
    setUserData({
      name: "",
      image: "",
      life: "",
      stroke: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
  };

  const handleInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validation(userData));
    if (
      error.name === true &&
      error.image === true &&
      error.life === true &&
      error.stroke === true &&
      error.defense === true &&
      error.speed === true &&
      error.height === true &&
      error.weight === true
    ) {
      dispatch(createPoke(userData));
      alert("Pokemon creado exitosamente");
      history.push("/home");
      stateReset();
    }
  };

  const handleType = (event) => {
    setUserData({
      ...userData,
      types: userData.types.concat(event.target.value),
    });
  };

  return (
    <div className={styles.divContainer}>
      <SearchBar />
      <div className={styles.divCreate}>
        <h1>Create your Pokemon</h1>
      </div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.divInputs}>
          <div className={styles.divInput}>
            <label className={styles.label} htmlFor="name">
              Name:{" "}
            </label>

            <div className={styles.divInputAndError}>
              <input
                className={styles.inputForm}
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />

              <p className={styles.errorStyle}>
                {error.name !== true && error.name}
              </p>
            </div>
          </div>

          <div className={styles.divInput}>
            <label className={styles.label} htmlFor="name">
              Image:{" "}
            </label>
            <div className={styles.divInputAndError}>
              <input
                className={styles.inputForm}
                name="image"
                value={userData.image}
                onChange={handleInputChange}
              />
              <p className={styles.errorStyle}>
                {error.image !== true && error.image}
              </p>
            </div>
          </div>

          <div className={styles.divInput}>
            <label className={styles.label} htmlFor="name">
              Life:{" "}
            </label>
            <div className={styles.divInputAndError}>
              <input
                className={styles.inputForm}
                type="number"
                name="life"
                value={userData.life}
                onChange={handleInputChange}
              />
              <p className={styles.errorStyle}>
                {error.life !== true && error.life}
              </p>
            </div>
          </div>

          <div className={styles.divInput}>
            <label className={styles.label} htmlFor="name">
              Stroke:{" "}
            </label>
            <div className={styles.divInputAndError}>
              <input
                className={styles.inputForm}
                type="number"
                name="stroke"
                value={userData.stroke}
                onChange={handleInputChange}
              />
              <p className={styles.errorStyle}>
                {error.stroke !== true && error.stroke}
              </p>
            </div>
          </div>
          <div className={styles.divInput}>
            <label className={styles.label} htmlFor="name">
              Defense:{" "}
            </label>
            <div className={styles.divInputAndError}>
              <input
                className={styles.inputForm}
                type="number"
                name="defense"
                value={userData.defense}
                onChange={handleInputChange}
              />
              <p className={styles.errorStyle}>
                {error.defense !== true && error.defense}
              </p>
            </div>
          </div>
          <div className={styles.divInput}>
            <label className={styles.label} htmlFor="name">
              Speed:{" "}
            </label>
            <div className={styles.divInputAndError}>
              <input
                className={styles.inputForm}
                type="number"
                name="speed"
                value={userData.speed}
                onChange={handleInputChange}
              />
              <p className={styles.errorStyle}>
                {error.speed !== true && error.speed}
              </p>
            </div>
          </div>
          <div className={styles.divInput}>
            <label className={styles.label} htmlFor="name">
              Height:{" "}
            </label>
            <div className={styles.divInputAndError}>
              <input
                className={styles.inputForm}
                type="number"
                name="height"
                value={userData.height}
                onChange={handleInputChange}
              />
              <p className={styles.errorStyle}>
                {error.height !== true && error.height}
              </p>
            </div>
          </div>

          <div className={styles.divInput}>
            <label className={styles.label} htmlFor="name">
              Weight:{" "}
            </label>
            <div className={styles.divInputAndError}>
              <input
                className={styles.inputForm}
                type="number"
                name="weight"
                value={userData.weight}
                onChange={handleInputChange}
              />
              <p className={styles.errorStyle}>
                {error.weight !== true && error.weight}
              </p>
            </div>
          </div>

          <button className={styles.buttonCreate} type="submit">
            CREATE
          </button>
        </div>

        <div
          className={styles.ctnSuperiorTypes}
          name="types"
          onChange={handleType}
          value={userData.types}
        >
          <label htmlFor="name">Types:</label>

          <div className={styles.ctnTypes}>
            {types &&
              types.map((t, index) => (
                <div className={styles.checkbox}>
                  <input type="checkbox" key={index} value={t.name} />
                  <label>{t.name[0].toUpperCase() + t.name.slice(1)} </label>
                </div>
              ))}
          </div>
        </div>
      </form>
    </div>
  );
}
