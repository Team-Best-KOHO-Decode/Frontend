import "./styles.css";
import Header from "../Components/Header";
import Button from "../Components/Button";
import { ReactComponent as SplashImage } from "../assets/icons/3char.svg";
import { Link } from "react-router-dom";

function CreatePlan() {
  return (
    <div className="root">
      <Header
        title="Create a Plan"
        subtitle="Choose a time, location and activity to vote on"
      />
      <div className="center">
        <SplashImage />
      </div>
      <Link to="/choosebudget" className="nostyle">
        <Button text="GOT IT" color="primary" />
      </Link>
    </div>
  );
}

export default CreatePlan;
