import React from "react";
import { useAnimeContext } from "../util/Anime-Context";
import SearchForm from "../Components/Search";
import Aresults from "../Components/Anime-Results";

const initialState = {
  loading: true,
};

const Anime = () => {
  const {
    loading,
    results,
    last_page,
    page,
    query,
    setQuery,
    pageUp,
    pageDown,
  } = useAnimeContext();
  return (
    <main>
      <SearchForm
        loading={loading}
        results={results}
        last_page={last_page}
        page={page}
        query={query}
        setQuery={setQuery}
        pageUp={pageUp}
        pageDown={pageDown}
      />
      <Aresults
        loading={loading}
        results={results}
        last_page={last_page}
        page={page}
        query={query}
        setQuery={setQuery}
        pageUp={pageUp}
        pageDown={pageDown}
      />
    </main>
  );
};

export default Anime;
