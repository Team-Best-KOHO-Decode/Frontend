import React from "react";
import "./styles.css";

interface Props {
  text: string;
}

function Subtitle(props: Props) {
  const { text } = props;
  return (
    <div>
      <h3 className="subtitle">{text}</h3>
    </div>
  );
}

export default Subtitle;
