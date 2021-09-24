import "./styles.css";

interface Props {
  budget: string;
  time: string;
  location: string;
  activity: string;
}

function ActivitySummary(props: Props) {
  const { budget, time, location, activity } = props;
  return (
    <div className="summary">
      <div className="summary-img"></div>
      <div className="summary-info-card">
        <div className="summary-info">
          <p className="summary-info-title">Budget</p>
          <p className="summary-info-detail">{budget}</p>
        </div>
        <div className="summary-info">
          <p className="summary-info-title">Time</p>
          <p className="summary-info-detail">{time}</p>
        </div>
        <div className="summary-info">
          <p className="summary-info-title">Location</p>
          <p className="summary-info-detail">{location}</p>
        </div>
        <div className="summary-info">
          <p className="summary-info-title">Activity</p>
          <p className="summary-info-detail">{activity}</p>
        </div>
      </div>
    </div>
  );
}

export default ActivitySummary;
