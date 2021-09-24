import "./styles.css";

interface Props {
  name: string;
  voteCount: string;
}

function SubActivity(props: Props) {
  const { name, voteCount } = props;
  return (
    <div>
      <div className="subActivity">
        <div className="image"></div>
        <div className="activityTitle">
          <p>{name}</p>
        </div>
      </div>

      <div className="votes">
        <p>{voteCount} Votes</p>
      </div>
    </div>
  );
}

export default SubActivity;
