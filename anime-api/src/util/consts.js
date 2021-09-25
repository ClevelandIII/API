import React from "react";
import {Anime, Character, Home, Manga, Person, Profile} from '../Pages'

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
    page: <Home/>
  },
  {
    id: 2,
    url: "/anime",
    text: "Anime",
    page: <Anime/>
  },

  {
    id: 3,
    url: "/manga",
    text: "Manga",
    page: <Manga />
  },
  {
    id: 4,
    url: "/character",
    text: "Character",
    page: <Character/>
  },
  {
    id: 5,
    url: "/person",
    text: "Person",
    page: <Person/>
  },
  {
    id: 6,
    url: "/profile",
    text: "Profile",
    page: <Profile/>
  },
];