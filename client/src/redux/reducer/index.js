const initialState = {
  pokemons: [],
  types: [],
  allPokemons: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case "GET_FILTER_TYPES":
      return {
        ...state,
        pokemons:
          action.payload === "all"
            ? state.allPokemons
            : state.allPokemons.filter((p) => {
                return p.types.some((t) => t.name === action.payload);
              }),
      };
    case "GET_FILTER_CREATED":
      const filterCreate =
        action.payload === "database"
          ? state.allPokemons.filter((p) => p.createdInBd)
          : state.allPokemons.filter((p) => !p.createdInBd);
      return {
        ...state,
        pokemons: action.payload === "all" ? state.allPokemons : filterCreate,
      };
    case "GET_ORDER_ALPHABETICALLY":
      let orderAlpha =
        action.payload === "a-z"
          ? state.allPokemons.sort(function (a, b) {
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();
              if (nameA > nameB) {
                return 1;
              }
              if (nameB > nameA) {
                return -1;
              }
              return 0;
            })
          : state.allPokemons.sort(function (a, b) {
              const nameA = a.name.toLowerCase();
              const nameB = b.name.toLowerCase();
              if (nameA > nameB) {
                return -1;
              }
              if (nameB > nameA) {
                return 1;
              }
              return 0;
            });
    case "GET_ORDER_STROKE":
      let orderStroke =
        action.payload === "minortomajor"
          ? state.allPokemons.sort(function (a, b) {
              if (a.stroke > b.stroke) {
                return 1;
              }
              if (b.stroke > a.stroke) {
                return -1;
              }
              return 0;
            })
          : state.allPokemons.sort(function (a, b) {
              if (a.stroke > b.stroke) {
                return -1;
              }
              if (b.stroke > a.stroke) {
                return 1;
              }
              return 0;
            });

      return {
        ...state,
        pokemons: orderStroke,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
