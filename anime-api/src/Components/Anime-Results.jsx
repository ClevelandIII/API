import React from "react";

const naurl =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Aresults = ({ results, loading }) => {
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="results section1">
      {results?.map((result) => {
        const {
          mal_id: id,
          url,
          image_url: img,
          title,
          synopsis,
          episodes,
          score,
          rated,
          name,
        } = result;

        return (
          <div className="results-info" key={id}>
            <div className="title-case">
              <h3 className="title">{title || name}</h3>
            </div>
            <div className="summery">
              <p className="">{synopsis}</p>
              <a href={url} target="_blank">
                Read more
              </a>
            </div>
            <div className="info">
              <p>
                {title} has {episodes} episodes
              </p>
              <p>with a fan rating of {score}.</p>
            </div>
            <div className="img">
              <img src={img} alt={title} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Aresults;
