import React from "react";
import "./styles.css";

interface TitleProps {
  text: string;
}

interface ParagraphProps {
  text: string;
}

export const TitleLarge = ({ text }: TitleProps) => {
  return <h1 className="title-lg">{text}</h1>;
};

export const TitleMedium = ({ text }: TitleProps) => {
  return <h2 className="title-md">{text}</h2>;
};

export const TitleSmall = ({ text }: TitleProps) => {
  return <h2 className="title-sm">{text}</h2>;
};

export const ParagraphLarge = ({ text }: ParagraphProps) => {
  return <p className="paragraph-lg">{text}</p>;
};

export const ParagraphMedium = ({ text }: ParagraphProps) => {
  return <p className="paragraph-md">{text}</p>;
};

export const ParagraphSmall = ({ text }: ParagraphProps) => {
  return <p className="paragraph-sm">{text}</p>;
};
