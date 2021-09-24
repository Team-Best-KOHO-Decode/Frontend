import "./styles.css";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Subtitle from "../Components/Subtitle";

function ChooseTime() {
  return (
    <div className="root">
      <Header title="Create a Time" subtitle="Select a time to hangout!" />
      <div>
        <Subtitle text="Time" />

        <div className="center">
          <input type="time" />
        </div>
        <Subtitle text="Date" />

        <div className="center">
          <input type="date" />
        </div>
      </div>
      <Button text="NEXT" color="primary" />
    </div>
  );
}

export default ChooseTime;
