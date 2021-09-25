import React from "react";

const initialState = {
  loading: true,
};

const Home = () => {
  return (
    <main>
      <div className="greet">
        <h1>Welcome to the MAL/ JIKAN API Site!</h1>
        <br />
        <img src="./jikan.png" alt="Jikan" className='image'/>
        <br />
        <h4>
          Here you are able to search up your favorite anime, manga, voice
          actors and anime characters all from the same site!
        </h4>
        <br />
        <h4>
          This site uses Mal's data, so you can also search up your profile as
          well.
        </h4>
        <br />
        <h4>
          To use this site, just click on the page of the topic that you want to
          search.
        </h4>
        <br />
      </div>
    </main>
  );
};

export default Home;
