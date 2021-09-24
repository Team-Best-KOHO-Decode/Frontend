import "./styles.css";
import { ParagraphMedium } from "../../Components/Typography";

export const Avatar = ({ id = 1, name = "anonymous", ...props }) => {
  return (
    <div className="avatar-container" {...props}>
      <div className="avatar">
        <img className="avatar-image" src={`/assets/avatars/${id}.svg`} />
      </div>
      <ParagraphMedium text={name} />
    </div>
  );
};
