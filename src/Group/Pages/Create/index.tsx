import { Link, useHistory } from "react-router-dom";
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
import axios from "axios";

import "./styles.css";

export const CreatePage = () => {
  const dispatch = useDispatch();
  const groupName = useSelector(selectGroupName);
  const history = useHistory();
  const onChange = (e) => {
    dispatch(groupSlice.actions.updateGroupName(e.target.value));
  };

  const submit = async () => {
    try {
      dispatch(groupSlice.actions.requestPostGroup());

      const response = await axios.post(
        "https://bohobackend.herokuapp.com/api/group/create",
        { group_name: groupName }
      );

      dispatch(
        groupSlice.actions.responsePostGroup({
          group_id: response.data.group_id,
          group_url: response.data.group_join_code,
        })
      );

      history.push("/group/invite");
    } catch (error) {
      console.log(error);
      dispatch(groupSlice.actions.errorPostGroup());
    }
  };

  return (
    <div className="create-page p4">
      <TitleLarge text="Create Your Group" />
      <ParagraphLarge text="Create your group and invite friends to hangout!" />
      <div className="create-page-camera">
        <Camera />
      </div>

      <ParagraphMedium text="Group name" className="create-page-group-name" />
      <input
        onChange={onChange}
        value={groupName}
        className="create-page-input"
      />
      <Button color="secondary" text="Create Group" onClick={submit} />
      <div className="footer">
        <Logo />
      </div>
    </div>
  );
};
