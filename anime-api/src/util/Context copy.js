import React, { useReducer, useContext, useEffect, useState } from "react";
import { reducer } from "./reducer";
// const ANIME_ENDPOINT = 'https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1'
// const MANGA_ENDPOINT = 'https://api.jikan.moe/v3/search/manga?q=full&page=1'
// const V_ACTOR_ENDPOINT = 'https://api.jikan.moe/v3/search/people?q=Smith&limit=20'
// const A_CHARACTER_ENDPOINT = 'https://api.jikan.moe/v3/search/character?q=Tanjiro&limit=20'
// const PROFILE_ENDPOINT = 'https://api.jikan.moe/v3/user/nekomata1037/profile'

const initialState = {
  loading: true,
  results: [],
  page: 1,
  last_page: 20,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [query, setQuery] = useState("Kimetsu");

  const fetchStories = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_HITS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  //add more dispatches for changing the story/ data

  const handleSearch = (query) => {
    dispatch({ type: "HANDLE_SEARCH", payload: query });
  };

  const pageUp = () => {
    dispatch({ type: "PAGE_UP" });
  };

  const pageDown = () => {
    dispatch({ type: "PAGE_DOWN" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}?q=${query}&page=${state.page}`);
  }, [query, state.page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSearch,
        query,
        setQuery,
        pageUp,
        pageDown,
        remove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};