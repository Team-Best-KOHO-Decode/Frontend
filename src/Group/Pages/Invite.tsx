import { ParagraphLarge, TitleLarge } from "../../Components/Typography";
import { Avatar } from "../../Components/Avatar";
import Button from "../../Components/Button";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { groupSlice } from "../store/slice";
import {
  selectGroupId,
  selectGroupUrl,
  selectGroupLoading,
} from "../store/selectors";
import axios from "axios";

import "./styles.css";

export const InvitePage = () => {
  const avatars = [
    { id: 1, name: "Cuong" },
    { id: 2, name: "Cuong" },
    { id: 3, name: "Cuong" },
    { id: 4, name: "Cuong" },
  ];

  const dispatch = useDispatch();
  const groupId = useSelector(selectGroupId);
  const groupUrl = useSelector(selectGroupUrl);
  const groupLoading = useSelector(selectGroupLoading);

  const submit = async () => {
    dispatch(groupSlice.actions.requestPostGroup());

    setTimeout(() => {
      dispatch(
        groupSlice.actions.responsePostGroup({
          group_id: "1",
          group_url: "https://11",
        })
      );
    }, 3000);
  };

  if (groupLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="invite-page p4">
      <TitleLarge text="Invite your friends" />
      <ParagraphLarge text="Invitation Link" />
      <ParagraphLarge text="Add Members" />
      {groupId}
      {groupUrl}

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
      <Button color="tertiary" text="Done" onClick={submit} />

      <div className="footer">
        <Logo />
      </div>
    </div>
  );
};
