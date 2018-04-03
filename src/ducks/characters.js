import axios from "axios";

const NEW_TITLE = "NEW_TITLE";
const GET_CHARACTERS = "GET_CHARACTERS";
const GET_PAGE = "GET_PAGE";
const ADD_FAVORITES = "ADD_FAVORITES";
const GET_FAVORITES = "GET_FAVORITES";
const UPDATE_FAVORITES = "UPDATE_FAVORITES";
const DELETE_FAVORITES = "DELETE_FAVORITES";

const initialState = {
  characters: [],
  favorites: [],
  loading: false,
  error: "",
  title: ""
};

export function newTitle(val) {
  return {
    type: NEW_TITLE,
    payload: val
  };
}

export function getCharacters() {
  return {
    type: GET_CHARACTERS,
    payload: axios.get("/api/characters")
  };
}

export function getPage(page) {
  return {
    type: GET_PAGE,
    payload: axios.get(`/api/characters/?page=${page}`)
  };
}

export function addFavorites(name, birth, gender, species, planet) {
  return {
    type: ADD_FAVORITES,
    payload: axios.post("/api/favorites/add", {
      name,
      birth,
      gender,
      species,
      planet
    })
  };
}

export function getFavorites() {
  return {
    type: GET_FAVORITES,
    payload: axios.get("/api/favorites")
  };
}

export function updateFavorites(id, name, birth, gender, species, planet) {
  return {
    type: UPDATE_FAVORITES,
    payload: axios
      .put("/api/favorites/update", {
        id,
        name,
        birth,
        gender,
        species,
        planet
      })
      .then(axios.get("/api/favorites"))
  };
}

export function deleteFavorites(id) {
  return {
    type: DELETE_FAVORITES,
    payload: axios
      .delete(`/api/favorites/${id}`)
      .then(axios.get("/api/favorites"))
  };
}

export default function characters(state = initialState, action) {
  switch (action.type) {
    case `NEW_TITLE`:
      return Object.assign({}, state, { title: action.payload });
    //GET CHARACTERS ASYNC
    case `${GET_CHARACTERS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_CHARACTERS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        characters: action.payload.data
      };
    case `${GET_CHARACTERS}_REJECTED`:
      return {
        ...state,
        error: action.payload
      };

    //GET PAGE ASYNC
    case `${GET_PAGE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_PAGE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        characters: action.payload.data
      };
    case `${GET_PAGE}_REJECTED`:
      return {
        ...state,
        error: action.payload
      };

    //ADD TO FAVORITES PAGE ASYNC
    case `${ADD_FAVORITES}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ADD_FAVORITES}_FULFILLED`:
      return {
        ...state,
        loading: false
      };
    case `${ADD_FAVORITES}_REJECTED`:
      return {
        ...state,
        error: action.payload
      };

    //GET FAVORITES ASYNC
    case `${GET_FAVORITES}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_FAVORITES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        favorites: action.payload.data
      };
    case `${GET_FAVORITES}_REJECTED`:
      return {
        ...state,
        error: action.payload
      };
    //UPDATE FAVORITES AND GET UPDATED FAVORITES ASYNC
    case `${UPDATE_FAVORITES}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${UPDATE_FAVORITES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        favorites: action.payload.data
      };
    case `${UPDATE_FAVORITES}_REJECTED`:
      return {
        ...state,
        error: action.payload
      };

    //DELETE FAVORITES AND GET UPDATED FAVORITES ASYNC
    case `${DELETE_FAVORITES}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${DELETE_FAVORITES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        favorites: action.payload.data
      };
    case `${DELETE_FAVORITES}_REJECTED`:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
