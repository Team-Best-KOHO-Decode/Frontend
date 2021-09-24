import "./styles.css";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Subtitle from "../Components/Subtitle";

function Setup() {
  const intro = (
    <div>
      <Header
        title="Create a Plan"
        subtitle="Choose a time, location and activity to vote on"
      />
      <div>
        <p>put the image here</p>
      </div>
      <Button text="GOT IT" color="primary" />
    </div>
  );

  const budget = (
    <div>
      <Header title="Choose a Budget" subtitle="Select a Price Range" />
      <div>
        <p>put the image here</p>
      </div>
      <Button text="NEXT" color="primary" />
    </div>
  );

  const time = (
    <div>
      <Header title="Create a Time" subtitle="Select a time to hangout!" />
      <div>
        <Subtitle text="" />
        <p>put the image here</p>
      </div>
      <Button text="NEXT" color="primary" />
    </div>
  );

  return intro;
}

export default Setup;
