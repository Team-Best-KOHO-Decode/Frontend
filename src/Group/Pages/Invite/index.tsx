import { ParagraphLarge, TitleLarge } from "../../../Components/Typography";
import { useHistory } from "react-router-dom";
import { Avatar } from "../../../Components/Avatar";
import Button from "../../../Components/Button";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { useSelector } from "react-redux";
import {
  selectGroupId,
  selectGroupUrl,
  selectGroupName,
  selectGroupLoading,
} from "../../store/selectors";

import "./styles.css";

export const InvitePage = () => {
  const avatars = [
    { id: 1, name: "Cuong" },
    { id: 2, name: "Cuong" },
    { id: 3, name: "Cuong" },
    { id: 4, name: "Cuong" },
  ];
  const history = useHistory();

  const groupId = useSelector(selectGroupId);
  const groupUrl = useSelector(selectGroupUrl);
  const groupName = useSelector(selectGroupName);
  const groupLoading = useSelector(selectGroupLoading);

  const done = () => {
    history.push("/group/create");
  };

  if (groupLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="invite-page p4">
      <TitleLarge text="Invite your friends" />
      <ParagraphLarge text="Invitation Link" />
      <ParagraphLarge text="Add Members" />

      <ParagraphLarge text={groupId} />
      <ParagraphLarge text={groupName} />
      <ParagraphLarge text={groupUrl} />

      <div className="invite-page-avatars">
        {avatars.map((avatar) => (
          <Avatar id={avatar.id} name={avatar.name} />
        ))}

        <div className="invite-page-plus">
          <div className="invite-page-plus-icon">
            <PlusIcon />
          </div>
        </div>
      </div>
      <Button color="secondary" text="Done" onClick={done} />

      <div className="footer">
        <Logo />
      </div>
    </div>
  );
};
