import { ReactComponent as Checkmark } from "../../assets/icons/Checkmark.svg";
import { ReactComponent as CheckmarkClicked } from "../../assets/icons/checkmark-clicked.svg";

interface Props {
  checked: boolean;
}

function Vote(props: Props) {
  const { checked } = props;

  return <div>{checked ? <CheckmarkClicked /> : <Checkmark />}</div>;
}

export default Vote;
