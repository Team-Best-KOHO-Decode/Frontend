import React from "react";
import "./styles.css";

interface Props {
  title: string;
  subtitle: string;
}

function Header(props: Props) {
  const { title, subtitle } = props;
  return (
    <div>
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}

export default Header;
