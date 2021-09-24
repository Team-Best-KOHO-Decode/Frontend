import "./styles.css";

interface Props {
  type: string;
}

function ActivityType(props: Props) {
  const { type } = props;
  return <button className="activityType">{type}</button>;
}

export default ActivityType;
