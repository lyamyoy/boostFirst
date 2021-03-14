import React from "react";
import Slider from "react-slick";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function QuestionSlide(props) {
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
  // const [count, setCount] = useState(0);
  // const [answer1, setAnswer1] = React.useState("いいえ");
  // const [answer2, setAnswer2] = React.useState("いいえ");
  // const [answer3, setAnswer3] = React.useState("いいえ");
  // const [answer4, setAnswer4] = React.useState("いいえ");
  // const [answer5, setAnswer5] = React.useState("いいえ");

  // const handleChange1 = (event) => {
  //   setAnswer1(event.target.value);
  //   console.log(answer1);
  // };
  // const handleChange2 = (event) => {
  //   setAnswer2(event.target.value === "はい");
  // };
  // const handleChange3 = (event) => {
  //   if (event.target.value === "はい") setAnswer3(true);
  //   else setAnswer3(false);
  // };
  // const handleChange4 = (event) => {
  //   if (event.target.value === "はい") setAnswer4(true);
  //   else setAnswer4(false);
  // };
  // const handleChange5 = (event) => {
  //   if (event.target.value === "はい") setAnswer5(true);
  //   else setAnswer5(false);
  // };
  // const [count, setCount] = useState(0);
  // function handleChange() {
  //   if (count <= 5) {
  //     let p = 0;
  //     let elements = document.getElementsByName("a");
  //     for (let i = 0; i < elements.length; i++) {
  //       if (elements[i].checked) {
  //         p += 1;
  //       }
  //     }
  //     setCount(p);
  //   }
  // }

  return (
    <Slider {...settings}>
      <div>
        <h1 style={style}>
          {/* <p>1あ</p> */}
          <p>朝すぐにベットから出れる？</p>
          <RadioGroup
            aria-label="question1"
            name="question1"
            value={props.answer1}
            onChange={props.handleChange1}
          >
            <FormControlLabel value="いいえ" control={<Radio />} label="はい" />
            <FormControlLabel value="はい" control={<Radio />} label="いいえ" />
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
            value={props.answer2}
            onChange={props.handleChange2}
          >
            <FormControlLabel value="はい" control={<Radio />} label="はい" />
            <FormControlLabel
              value="いいえ"
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
            value={props.answer3}
            onChange={props.handleChange3}
          >
            <FormControlLabel value="はい" control={<Radio />} label="はい" />
            <FormControlLabel
              value="いいえ"
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
            value={props.answer4}
            onChange={props.handleChange4}
          >
            <FormControlLabel value="はい" control={<Radio />} label="はい" />
            <FormControlLabel
              value="いいえ"
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
            value={props.answer5}
            onChange={props.handleChange5}
          >
            <FormControlLabel value="はい" control={<Radio />} label="はい" />
            <FormControlLabel
              value="いいえ"
              control={<Radio />}
              label="いいえ"
            />
          </RadioGroup>
        </h1>
      </div>
      {/* {count} */}
    </Slider>
  );
}

export default QuestionSlide;
