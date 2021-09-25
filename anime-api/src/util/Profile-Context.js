import React, { useReducer, useContext, useEffect, useState } from "react";
import { reducer } from "./reducer";
const API_ENDPOINT = "https://api.jikan.moe/v3/user";

const initialState = {
  loading: true,
  data: [],
};

const ProfileContext = React.createContext();

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [query, setQuery] = useState("nekomata1037");

  const fetchStories = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({ type: "SET_USER", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}/${query}/profile`);
    fetchStories(`${API_ENDPOINT}/${query}/profile`);
  }, [query, state.page]);

  return (
    <ProfileContext.Provider
      value={{
        ...state,
        query,
        setQuery,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  return (
    useContext(ProfileContext)
  )
};