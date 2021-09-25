import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/main.css";
import { AnimeProvider } from "./util/Anime-Context";
import { MangaProvider } from "./util/Manga-Context";
import { CharacterProvider } from "./util/Character-Context";
import { PersonProvider } from "./util/Person-Context";
import { ProfileProvider } from "./util/Profile-Context";

ReactDOM.render(
  <React.StrictMode>
    <AnimeProvider>
      <MangaProvider>
        <CharacterProvider>
          <PersonProvider>
            <ProfileProvider>
              <Router>
                <App />
              </Router>
            </ProfileProvider>
          </PersonProvider>
        </CharacterProvider>
      </MangaProvider>
    </AnimeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
