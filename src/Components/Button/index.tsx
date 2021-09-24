import React from "react";
import "./styles.css";

interface Props {
  text: string;
  color: "primary" | "secondary" | "tertiary";
}

function Button(props: Props) {
  const { text, color } = props;
  return <button className={"button " + color}>{text}</button>;
}

export default Button;
