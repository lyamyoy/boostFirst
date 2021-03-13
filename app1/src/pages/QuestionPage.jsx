import React from "react";
// import Question from "../components/Question";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import QuestionSlide from "../components/QuestionSlide";
import { Button } from "@material-ui/core";
import styles from "../assets/QuestionStyle.module.css";

export default function QuestionPage() {
  return (
    <div className={styles.color}>
      <h1>質問</h1>
      <QuestionSlide />
      <div className={styles.resultbButton}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/youtube"
        >
          動画を見る
        </Button>
      </div>
      {/* <Link to="">youtube</Link> */}
      {/* <button onClick={onClickProduct}>youtube</button> */}
    </div>
  );
}
