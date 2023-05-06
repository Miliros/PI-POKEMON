import React, { useEffect } from "react";
import {
  getTypes,
  getFilterTypes,
  getFilterCreated,
  getOrderAlphabetically,
  getOrderStroke,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Filters.module.css";

export default function Filters({ setCheckState }) {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleFilterTypes = (e) => {
    dispatch(getFilterTypes(e.target.value));
  };

  const handleFilterCreated = (e) => {
    dispatch(getFilterCreated(e.target.value));
  };

  const handldeOrderAlphabetically = (e) => {
    setCheckState(true);
    dispatch(getOrderAlphabetically(e.target.value));
  };

  const handldeOrderStroke = (e) => {
    setCheckState(true);
    dispatch(getOrderStroke(e.target.value));
  };

  return (
    <div className={styles.containerFilters}>
      <div>
        <p className={styles.divFilt}>Filters</p>
        <div className={styles.divFilters}>
          <div className={styles.containerTypes}>
            <label className={styles.select}>Types </label>
            <select className={styles.select} onChange={(e) => handleFilterTypes(e)}>
              <option value="all">All</option>
              {types &&
                types.map((t, index) => (
                  <option key={index} value={t.name}>
                    {t.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className={styles.select}>Create - Api </label>
            <select className={styles.select} onChange={(e) => handleFilterCreated(e)}>
              <option value="all">All</option>
              <option value="database">Create</option>
              <option value="api">Api</option>
            </select>
          </div>
        </div>
      </div>
      <div>
      <p className={styles.divFilt}>Order</p>
      <div className={styles.divOrder}>
        <div className={styles.containerOrder}>
          <label className={styles.select}>Alphabetically </label>
          <select  className={styles.select} onChange={(e) => handldeOrderAlphabetically(e)}>
            <option>-</option>

            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
        <div>
          <label className={styles.select}>Stroke </label>
          <select className={styles.select} onChange={(e) => handldeOrderStroke(e)}>
            <option>-</option>

            <option value="majortominor">Major to minor</option>
            <option value="minortomajor">Minor to major</option>
          </select>
        </div>
      </div>
    </div>
    </div>
  );
}
