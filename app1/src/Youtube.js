import React from "react";
import Movie from "./movie.json";

export default function Youtube() {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <iframe
        title="ymovie"
        id="ytplayer"
        type="ytplayer"
        width="480"
        height="270"
        src={Movie.movies.movie1.url}
        frameborder="0"
      />
    </div>
  );
}
