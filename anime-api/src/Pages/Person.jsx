import React from "react";
import SearchForm from "../Components/Search";
import { usePersonContext } from "../util/Person-Context";
import Presults from "../Components/Person-Results";

const initialState = {
  loading: true,
};

const Person = () => {
  const {
    loading,
    results,
    last_page,
    page,
    query,
    setQuery,
    pageUp,
    pageDown,
  } = usePersonContext();
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
      <Presults
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

export default Person;
