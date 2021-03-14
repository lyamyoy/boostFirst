import React from "react";
// import Question from "../components/Question";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
// import QuestionSlide from "../components/QuestionSlide";
import { Button } from "@material-ui/core";
import Slider from "react-slick";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "../assets/QuestionStyle.module.css";
// import Movie from "../movie.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import QuestionSlide from "../components/QuestionSlide";

export default function QuestionPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const style = {
    margin: 100,
    height: 300,
    color: "#fff",
    background: "#3ab60b",
  };
  const [answer1, setAnswer1] = React.useState("はい");
  const [answer2, setAnswer2] = React.useState("はい");
  const [answer3, setAnswer3] = React.useState("はい");
  const [answer4, setAnswer4] = React.useState("はい");
  const [answer5, setAnswer5] = React.useState("はい");

  function culSum() {
    let Score = 0;
    if (answer1 === "いいえ") Score += 1;
    if (answer2 === "いいえ") Score += 2;
    if (answer3 === "いいえ") Score += 3;
    if (answer4 === "いいえ") Score += 4;
    if (answer5 === "いいえ") Score += 5;
    console.log(Score);
    return Score;
  }

  // function selectYoutube() {
  //   if (Score >= 13)
  //     return "https://www.youtube.com/embed/ZXsQAXx_ao0?autoplay=1";
  //   else if (Score >= 10)
  //     return "https://www.youtube.com/embed/AO8RNNxEAjM?autoplay=1";
  //   else if (Score >= 7)
  //     return "https://www.youtube.com/embed/Am1ms5I-o7Y?autoplay=1";
  //   else if (Score >= 4)
  //     return "https://www.youtube.com/embed/w07F1IGi6yw?autoplay=1";
  //   else return "https://www.youtube.com/embed/ZXsQAXx_ao0?autoplay=1";
  // }

  const handleChange1 = (event) => {
    setAnswer1(event.target.value);
    console.log(answer1);
  };
  const handleChange2 = (event) => {
    setAnswer2(event.target.value);
  };
  const handleChange3 = (event) => {
    setAnswer3(event.target.value);
  };
  const handleChange4 = (event) => {
    setAnswer4(event.target.value);
  };
  const handleChange5 = (event) => {
    setAnswer5(event.target.value);
  };
  return (
    <div className={styles.QuestionSlide}>
      <h1>やる気診断テスト〜Boost〜</h1>
      <Slider {...settings}>
        <div>
          <h1 style={style}>
            <p>1</p>
            <p>朝すぐにベットから出れる？</p>
            <RadioGroup
              aria-label="question1"
              name="question1"
              value={answer1}
              onChange={handleChange1}
            >
              <FormControlLabel
                value="いいえ"
                control={<Radio />}
                label="はい"
              />
              <FormControlLabel
                value="はい"
                control={<Radio />}
                label="いいえ"
              />
            </RadioGroup>
          </h1>
        </div>
        <div>
          <h1 style={style}>
            <p>2</p>
            <p>１日のルーティンはある？</p>
            <RadioGroup
              aria-label="question2"
              name="question2"
              value={answer2}
              onChange={handleChange2}
            >
              <FormControlLabel
                value="いいえ"
                control={<Radio />}
                label="はい"
              />
              <FormControlLabel
                value="はい"
                control={<Radio />}
                label="いいえ"
              />
            </RadioGroup>
          </h1>
        </div>
        <div>
          <h1 style={style}>
            <p>3</p>
            <p>運動してる？</p>
            <RadioGroup
              aria-label="question3"
              name="question3"
              value={answer3}
              onChange={handleChange3}
            >
              <FormControlLabel
                value="いいえ"
                control={<Radio />}
                label="はい"
              />
              <FormControlLabel
                value="はい"
                control={<Radio />}
                label="いいえ"
              />
            </RadioGroup>
          </h1>
        </div>
        <div>
          <h1 style={style}>
            <p>4</p>
            <p>夢がある？</p>
            <RadioGroup
              aria-label="question4"
              name="question4"
              value={answer4}
              onChange={handleChange4}
            >
              <FormControlLabel
                value="いいえ"
                control={<Radio />}
                label="はい"
              />
              <FormControlLabel
                value="はい"
                control={<Radio />}
                label="いいえ"
              />
            </RadioGroup>
          </h1>
        </div>
        <div>
          <h1 style={style}>
            <p>5</p>
            <p>やる気はある？</p>
            <RadioGroup
              aria-label="question5"
              name="question5"
              value={answer5}
              onChange={handleChange5}
            >
              <FormControlLabel
                value="いいえ"
                control={<Radio />}
                label="はい"
              />
              <FormControlLabel
                value="はい"
                control={<Radio />}
                label="いいえ"
              />
            </RadioGroup>
          </h1>
        </div>
        {/* {count} */}
      </Slider>
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
      {/* <Link to="">youtube</Link> */}
      {/* <button onClick={onClickProduct}>youtube</button> */}
    </div>
  );
}
