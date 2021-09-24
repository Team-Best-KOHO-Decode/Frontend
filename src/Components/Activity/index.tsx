import React from 'react';
import "./styles.css";

interface Props {
  name: string;
  type: string;
  price: string;
}

function Activity(props: Props) {
  const {
    name,
    type,
    price,
  } = props;

  return (
    <div className="card">
      <div className="content">
        <div className="img"></div>
        <div className="info">
          <p className="title">{name}</p>
          <p className="subText">{type}</p>
          <p className="subText">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Activity;