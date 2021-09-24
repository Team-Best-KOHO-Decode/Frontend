import "./styles.css";
import Activity from "../Components/ActivityCard";
import SubActivity from "../Components/SubActivity";
import Button from "../Components/Button";

function TopVotePage() {
  return (
    <div className="root">
      <p className="title">Top Vote</p>
      <Activity
        name="Mario's"
        type="Italian"
        price="$$"
        showVote={false}
        imgUrl="https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg"
      />
      <div className="subActivities">
        <SubActivity name="Subway" voteCount="5" />
        <SubActivity name="Bowling" voteCount="3" />
      </div>
      <div className="buttons">
        <Button text="View Plan" color="primary" />
        <Button text="Edit Plan" color="secondary" />
      </div>
    </div>
  );
}

export default TopVotePage;
