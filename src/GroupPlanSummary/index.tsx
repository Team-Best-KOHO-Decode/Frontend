import Button from "../Components/Button";
import { Avatar } from "../Components/Avatar/index";
import ActivitySummary from "../Components/ActivitySummary";
import "./styles.css";
import { ReactComponent as Friends } from "../assets/icons/Friends.svg";

function GroupPlanSummaryPage() {
  return (
    <div className="root">
      <Friends />
      <p className="title">John's Group</p>
      <p className="title">Members</p>
      <p className="title">Upcoming Events</p>
      <ActivitySummary
        budget="$$"
        time="8:30PM EST"
        location="Toronto-East"
        activity="Sushi"
      />
      <div className="group-summary-buttons">
        <Button text="New Event" color="primary" />
      </div>
    </div>
  );
}

export default GroupPlanSummaryPage;
