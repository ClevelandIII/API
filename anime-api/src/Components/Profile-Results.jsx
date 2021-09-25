import React from "react";

const naurl =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const ResultsProfile = ({ data, loading }) => {
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  const {
    user_id: id,
    url,
    image_url: img,
    gender,
    username,
    birthday,
    location,
    joined,
    anime_stats,
    manga_stats,
  } = data;

  const { episodes_watched, days_watched, dropped } = anime_stats;

  const { days_read, chapters_read, dropped: dm } = manga_stats;

  return (
    <article>
      <div className="profile" key={id}>
        <div className="img">
          <img src={img} alt={username} />
        </div>
        <div className="rest">
          <div className="title-case">
            <a href={url} target="_blank">
              {username}
            </a>
          </div>
          <div className="info">
            <p>
              Their gender is {gender} and they are from {location}.
            </p>
            <p>
              {username} has spent {days_watched} days watching anime with{" "}
              {episodes_watched} episodes watched and {dropped} anime dropped.
            </p>
            <p>
              {username} has also spent {days_read} days watching anime with{" "}
              {chapters_read} episodes watched and {dm} anime dropped.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResultsProfile;
