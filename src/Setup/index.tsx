import "./styles.css";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Subtitle from "../Components/Subtitle";
import React, { useState } from "react";
import { ReactComponent as SplashImage } from "../assets/icons/3char.svg";

function Setup() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const intro = (
    <div>
      <Header
        title="Create a Plan"
        subtitle="Choose a time, location and activity to vote on"
      />
      <div className="items-center">
        {/* <img className="img"> */}
        <SplashImage />
        {/* </img> */}
      </div>
      <Button text="GOT IT" color="primary" />
    </div>
  );

  const budget = (
    <div>
      <Header title="Choose a Budget" subtitle="Select a Price Range" />
      <div>
        <Subtitle text="Price" />
        <div className="star-rating">
          {[...Array(4)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <p className="dollar-sign no-margin">$</p>
              </button>
            );
          })}
        </div>
        <Subtitle text="Edit Amount" />
        <input type="number"></input>
      </div>

      <Button text="NEXT" color="primary" />
    </div>
  );

  const time = (
    <div>
      <Header title="Create a Time" subtitle="Select a time to hangout!" />
      <div>
        <Subtitle text="Time" />

        <div className="center">
          <input type="time" />
        </div>
        <Subtitle text="Date" />

        <div className="center">
          <input type="date" />
        </div>
      </div>
      <Button text="NEXT" color="primary" />
    </div>
  );

  return <div className="root">{time}</div>;
}

export default Setup;
