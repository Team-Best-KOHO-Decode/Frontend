import { useState } from "react";
import Vote from "../Vote";
import "./styles.css";

interface Props {
  name: string;
  type: string;
  price: string;
  showVote?: boolean;
}

function Activity(props: Props) {
  const { name, type, price, showVote = true } = props;
  const [vote, setVote] = useState(false);

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
      {showVote && (
        <div className="vote-btn" onClick={() => setVote(!vote)}>
          <Vote checked={vote} />
        </div>
      )}
    </div>
  );
}

export default Activity;
