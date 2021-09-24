import React from "react";
import Button from "../components/Button";
import Activity from "../components/Activity";
import ActivityType from "../components/ActivityType";

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
      <div className="activitesList">
        {activityTypes.map((type) => (
          <ActivityType type={type} />
        ))}
      </div>
      {activities.map((activity) => (
        <Activity
          name={activity.name}
          type={activity.type}
          price={activity.price}
        />
      ))}
      <Button text="Hello" />
    </div>
  );
}

export default ActivityPage;
