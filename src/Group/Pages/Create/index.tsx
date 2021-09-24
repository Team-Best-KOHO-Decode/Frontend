import { Link } from "react-router-dom";
import {
  ParagraphLarge,
  ParagraphMedium,
  TitleLarge,
} from "../../../Components/Typography";
import Button from "../../../Components/Button";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { ReactComponent as Camera } from "../../../assets/icons/camera.svg";
import { useDispatch, useSelector } from "react-redux";
import { groupSlice } from "../../store/slice";
import { selectGroupName } from "../../store/selectors";

import "./styles.css";

export const CreatePage = () => {
  const avatars = [
    { id: 1, name: "Cuong" },
    { id: 2, name: "Cuong" },
    { id: 3, name: "Cuong" },
    { id: 4, name: "Cuong" },
  ];

  const dispatch = useDispatch();
  const groupName = useSelector(selectGroupName);
  const onChange = (e) => {
    dispatch(groupSlice.actions.updateGroupName(e.target.value));
  };

  return (
    <div className="create-page p4">
      <TitleLarge text="Create Your Group" />
      <ParagraphLarge text="Create your group and invite friends to hangout!" />
      <Camera />

      <ParagraphMedium text="Group name" />
      <input onChange={onChange} value={groupName} />
      <Link to="/group/invite">
        <Button color="tertiary" text="Create Group" />
      </Link>
      <div className="footer">
        <Logo />
      </div>
    </div>
  );
};
