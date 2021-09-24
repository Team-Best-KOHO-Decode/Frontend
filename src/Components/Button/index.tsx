import React from "react";
import "./styles.css";

interface Props {
  text: string;
}

function Button(props: Props) {
  const { text } = props;
  return <button className="button">{text}</button>;
}

export default Button;
