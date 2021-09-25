import React from "react";
import SearchForm from "../Components/Search";
import { useCharacterContext } from "../util/Character-Context";
import Cresults from "../Components/Char-Results";

const initialState = {
  loading: true,
};

const Character = () => {
  const { 
    loading,
    results,
    last_page,
    page,
    query,
    setQuery,
    pageUp,
    pageDown,
  } = useCharacterContext();
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
      <Cresults
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

export default Character;
