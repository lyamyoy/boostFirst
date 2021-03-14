import React from "react";
import styles from "../assets/QuestionStyle.module.css";
import motivation5 from "../../public/motivation5.jpg";
import motivation4 from "../../public/motivation4.jpg";
import motivation3 from "../../public/motivation3.jpg";
import motivation2 from "../../public/motivation2.jpg";
import motivation1 from "../../public/motivation1.jpg";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function ResultPage() {
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
  function selectPicture() {
    if (Score >= 13) return motivation5;
    else if (Score >= 10) return motivation4;
    else if (Score >= 7) return motivation3;
    else if (Score >= 4) return motivation2;
    else return motivation1;
  }
  return (
    <>
      <div className={styles.color}>
        <p>結果</p>
        <img src={selectPicture} alt="motivation_img" />
      </div>
      <div className={styles.resultbButton}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={"/youtube?Score=" + culSum()}
        >
          動画を見る
        </Button>
      </div>
    </>
  );
}
