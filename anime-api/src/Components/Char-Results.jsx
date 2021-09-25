import React from "react";

const naurl =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Aresults = ({ results, loading }) => {
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="results section2">
      {results?.map((result) => {
        const {
          mal_id: id,
          url,
          image_url: img,
          name,
        } = result;

        return (
          <div className="results-info" key={id}>
            <div className="title-case">
              <a href={url} target="_blank" className="name">
                {name}
              </a>
            </div>
            <br />
            <div className="img">
              <img src={img} alt={name} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Aresults;
