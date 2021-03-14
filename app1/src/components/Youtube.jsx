import React from "react";
// import Movie from "../movie.json";

export default function Youtube() {
  // const { params } = props.match;
  // const Score = param.Score;
  const param = getUrlQueries();
  const Score = param.Score;
  function getUrlQueries() {
    let queryStr = window.location.search.slice(1); // 文頭?を除外
    let queries = {};

    // クエリがない場合は空のオブジェクトを返す
    if (!queryStr) {
      return queries;
    }

    // クエリ文字列を & で分割して処理
    queryStr.split("&").forEach(function (queryStr) {
      // = で分割してkey,valueをオブジェクトに格納
      var queryArr = queryStr.split("=");
      queries[queryArr[0]] = queryArr[1];
    });

    return queries;
  }
  console.log(Score);
  function selectYoutube() {
    if (Score >= 13)
      return "https://www.youtube.com/embed/ZXsQAXx_ao0?autoplay=1";
    else if (Score >= 10)
      return "https://www.youtube.com/embed/AO8RNNxEAjM?autoplay=1";
    else if (Score >= 7)
      return "https://www.youtube.com/embed/Am1ms5I-o7Y?autoplay=1";
    else if (Score >= 4)
      return "https://www.youtube.com/embed/w07F1IGi6yw?autoplay=1";
    else return "https://www.youtube.com/embed/ZXsQAXx_ao0?autoplay=1";
  }
  const url = selectYoutube();
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <iframe
        title="ymovie"
        id="ytplayer"
        type="ytplayer"
        width="1000"
        height="550"
        src={url}
        frameborder="0"
      />
    </div>
  );
}
