import { useState } from "react";
import Vote from "../Vote";
import "./styles.css";

interface Props {
  name: string;
  type: string;
  price: string;
  imgUrl: string;
  showVote?: boolean;
}

function Activity(props: Props) {
  const { name, type, price, showVote = true } = props;
  const [vote, setVote] = useState(false);

  const HandlePrice = ["$", "$$", "$$$", "$$$$"];

  return (
    <div className="card">
      <div className="content">
        {/* <div className="img"></div> */}
        <img src="imgUrl" className="img" alt="" />
        <div className="info">
          <p className="title">{name}</p>
          <p className="subText">{type}</p>
          <p className="subText">{HandlePrice[parseInt(price) - 1]}</p>
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
