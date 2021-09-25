import React from "react";
import SearchForm from "../Components/Search";
import { useProfileContext } from "../util/Profile-Context";
import ResultsProfile from "../Components/Profile-Results";

const initialState = {
  loading: true,
};

const Profile = () => { 
  const {
    loading,
    query,
    setQuery,
    data,
  } = useProfileContext();
  return (
    <main>
      <SearchForm
        loading={loading}
        query={query}
        setQuery={setQuery}
        data={data}
      />
      <ResultsProfile
        loading={loading}
        query={query}
        setQuery={setQuery}
        data={data}
      />
    </main>
  );
};

export default Profile;
