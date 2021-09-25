import React, { useReducer, useContext, useEffect, useState } from "react";
import { reducer } from "./reducer";
const API_ENDPOINT = "https://api.jikan.moe/v3/search/people";

const initialState = {
  loading: true,
  results: [],
  page: 1,
  last_page: 20,
};

const PersonContext = React.createContext();

export const PersonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [query, setQuery] = useState("smith");


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
  

  const pageUp = () => {
    dispatch({ type: "PAGE_UP" });
  };

  const pageDown = () => {
    dispatch({ type: "PAGE_DOWN" });
  };

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}?q=${query}&page=${state.page}`);
  }, [query, state.page]);

  return (
    <PersonContext.Provider
      value={{
        ...state,
        query,
        setQuery,
        pageUp,
        pageDown,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export const usePersonContext = () => {
  return useContext(PersonContext);
};