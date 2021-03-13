import React from "react";
import Slider from "react-slick";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "../assets/QuestionStyle.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function QuestionSlide() {
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
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Slider {...settings}>
      <div>
        <h1 style={style}>
          <p>1</p>
          <RadioGroup
            aria-label="question1"
            name="question1"
            value={value}
            onChange={handleChange}
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
          <p>2</p>
          <RadioGroup
            aria-label="question2"
            name="question2"
            value={value}
            onChange={handleChange}
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
          <RadioGroup
            aria-label="question3"
            name="question3"
            value={value}
            onChange={handleChange}
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
          <RadioGroup
            aria-label="question4"
            name="question4"
            value={value}
            onChange={handleChange}
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
          <RadioGroup
            aria-label="question5"
            name="question5"
            value={value}
            onChange={handleChange}
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
    </Slider>
  );
}

export default QuestionSlide;
