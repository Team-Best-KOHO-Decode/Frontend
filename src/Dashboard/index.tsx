import Button from "../Components/Button";
import Activity from "../Components/ActivityCard";

function DashboardPage() {
  return (
    <div>
      <Activity name="Mario's" type="Italian" price="8-15$" />
      <Button text="Hello" color="primary" />
    </div>
  );
}

export default DashboardPage;
