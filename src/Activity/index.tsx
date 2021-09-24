import Button from "../Components/Button";
import Activity from "../Components/ActivityCard";
import ActivityType from "../Components/ActivityType";

import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

function ActivityPage() {
  const activityTypes = ["Food", "Entertainment", "Sports"];
  // const activities = [
  //   {
  //     name: "Mario's",
  //     type: "Italian",
  //     price: "$$",
  //   },
  //   {
  //     name: "Subway",
  //     type: "Fast Food",
  //     price: "$",
  //   },
  //   {
  //     name: "Lee Restaurant",
  //     type: "Bougie",
  //     price: "$$$",
  //   },
  // ];
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("https://bohobackend.herokuapp.com/api/activity/")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  console.log(activities);

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
        {activities.map(
          (activity: {
            name: string;
            description: string;
            cost: string;
            image: string;
          }) => {
            return (
              <Activity
                name={activity.name}
                type={activity.description}
                price={activity.cost}
                imgUrl={activity.image}
              />
            );
          }
        )}
      </div>
      <Button text="Submit" color="primary" />
    </div>
  );
}

export default ActivityPage;
