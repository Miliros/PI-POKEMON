import axios from "axios";

export function getPokemons(pokeName) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/pokemons${pokeName ? `?name=${pokeName}` : ""}`
      );
      return dispatch({
        type: "GET_POKEMONS",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR_POKEMONS",
        payload: error.response.data,
      });
    }
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

export function getDetail(id) {
  return async function (dispatch) {
    try {
      var response = await axios(`http://localhost:3001/pokemon/${id}`);
      return dispatch({
        type: "GET_DETAILS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function createPoke(payload) {
  return async function (dispatch) {
    try {
      var response = await axios.post("http://localhost:3001/pokemon", payload);
      return dispatch({
        type: "GET_CREATE_POKE",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeState() {
  return function (dispatch) {
    return dispatch({
      type: "REMOVE_STATE",
    });
  };
}
