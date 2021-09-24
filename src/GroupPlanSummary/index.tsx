import Button from "../Components/Button";
import ActivitySummary from "../Components/ActivitySummary";
import "./styles.css";

function GroupPlanSummaryPage() {
  return (
    <div className="root">
      <p className="title">Group A's Plan</p>
      <ActivitySummary
        budget="$$"
        time="8:30PM EST"
        location="Toronto-East"
        activity="Sushi"
      />
      <div className="group-summary-buttons">
        <Button text="Edit Plan" color="secondary" />
        <Button text="Create New Plan" color="primary" />
      </div>
    </div>
  );
}

export default GroupPlanSummaryPage;
