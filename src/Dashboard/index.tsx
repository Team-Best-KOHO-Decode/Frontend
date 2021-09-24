import React from "react";
import Button from "../Components/Button";
import Activity from '../Components/Activity';

function DashboardPage() {
  return (
    <div>
      <Activity 
        name="Mario's"
        type="Italian"
        price="8-15$"
      />
      <Button text="Hello"/>
    </div>
  );
}

export default DashboardPage;
