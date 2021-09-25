import React from "react";
import { useMangaContext } from "../util/Manga-Context";
import SearchForm from "../Components/Search";
import Mresults from "../Components/Manga-Results";

const initialState = {
  loading: true,
};

const Manga = () => {
  const {
    loading,
    results,
    last_page, 
    page,
    query,
    setQuery,
    pageUp,
    pageDown,
  } = useMangaContext();
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
      <Mresults
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

export default Manga;
