import React, { useEffect } from "react";
import {
  getTypes,
  getFilterTypes,
  getFilterCreated,
  getOrderAlphabetically,
  getOrderStroke
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

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
  }

  return (
    <div>
      <div>
        <label>Tipos </label>
        <select onChange={(e) => handleFilterTypes(e)}>
          <option value="all">Todos</option>
          {types &&
            types.map((t, index) => (
              <option key={index} value={t.name}>
                {t.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label>Creados - Api </label>
        <select onChange={(e) => handleFilterCreated(e)}>
          <option value="all">Todos</option>
          <option value="database">Creados</option>
          <option value="api">Api</option>
        </select>
      </div>
      <div>
        <label>Order alphabetically </label>
        <select onChange={(e) => handldeOrderAlphabetically(e)}>
          <option>-</option>

          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
      <div>
        <label>Order stroke </label>
        <select onChange={(e) => handldeOrderStroke(e)}>
          <option>-</option>

          <option value="majortominor">Major to minor</option>
          <option value="minortomajor">Minor to major</option>
        </select>
      </div>
    </div>
  );
}
