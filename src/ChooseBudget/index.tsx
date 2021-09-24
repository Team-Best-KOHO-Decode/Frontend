import "./styles.css";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Subtitle from "../Components/Subtitle";
import React, { useState } from "react";

function ChooseBudget() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="root">
      <Header title="Choose a Budget" subtitle="Select a Price Range" />
      <div>
        <Subtitle text="Price" />
        <div className="star-rating center">
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
        <div className="center">
          <input type="number"></input>
        </div>
      </div>

      <Button text="NEXT" color="primary" />
    </div>
  );
}

export default ChooseBudget;
