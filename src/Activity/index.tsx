import Button from "../Components/Button";
import Activity from "../Components/ActivityCard";
import ActivityType from "../Components/ActivityType";

import "./styles.css";

function ActivityPage() {
  const activityTypes = ["Food", "Entertainment", "Sports"];
  const activities = [
    {
      name: "Mario's",
      type: "Italian",
      price: "$$",
    },
    {
      name: "Subway",
      type: "Fast Food",
      price: "$",
    },
    {
      name: "Lee Restaurant",
      type: "Bougie",
      price: "$$$",
    },
  ];

  return (
    <div className="root">
      <div className="info">
        <p>Recommended Activities</p>
        <p>Based on your Group Budget of 15-30$ and location</p>
      </div>
      <div className="activitesTypes">
        {activityTypes.map((type) => (
          <ActivityType type={type} />
        ))}
      </div>
      <div className="activitesList">
        {activities.map((activity) => (
          <Activity
            name={activity.name}
            type={activity.type}
            price={activity.price}
          />
        ))}
      </div>
      <Button text="Submit" color="primary" />
    </div>
  );
}

export default ActivityPage;
