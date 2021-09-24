import React from "react";
import "./styles.css";

interface Props {
  text: string;
  color: "primary" | "secondary" | "tertiary";
  onClick: () => void;
}

function Button(props: Props) {
  const { text, color, onClick } = props;

  return (
    <button onClick={() => onClick()} className={"button " + color}>
      {text}
    </button>
  );
}

export default Button;
