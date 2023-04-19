import axios from "axios";

export function getPokemons(pokeName) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/pokemons${pokeName ? `?name=${pokeName}` : ""}`
    );
    return dispatch({
      type: "GET_POKEMONS",
      payload: response.data,
    });
  };
}

export function getTypes() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/types");
    return dispatch({
      type: "GET_TYPES",
      payload: response.data,
    });
  };
}

export function getFilterTypes(payload) {
  return function (dispatch) {
    return dispatch({
      type: "GET_FILTER_TYPES",
      payload,
    });
  };
}

export function getFilterCreated(payload) {
  return function (dispatch) {
    return dispatch({
      type: "GET_FILTER_CREATED",
      payload,
    });
  };
}

export function getOrderAlphabetically(payload) {
  return function (dispatch) {
    return dispatch({
      type: "GET_ORDER_ALPHABETICALLY",
      payload,
    });
  };
}
export function getOrderStroke(payload) {
  return function (dispatch) {
    return dispatch({
      type: "GET_ORDER_STROKE",
      payload,
    });
  };
}
