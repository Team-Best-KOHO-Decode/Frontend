import { ParagraphLarge, TitleLarge } from "../../Components/Typography";
import { Avatar } from "../../Components/Avatar";
import Button from "../../Components/Button";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import "./styles.css";

export const InvitePage = () => {
  const avatars = [
    { id: 1, name: "Cuong" },
    { id: 2, name: "Cuong" },
    { id: 3, name: "Cuong" },
    { id: 4, name: "Cuong" },
  ];

  return (
    <div className="invite-page p4">
      <TitleLarge text="Invite your friends" />
      <ParagraphLarge text="Invitation Link" />
      <ParagraphLarge text="Add Members" />
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
      <Button color="tertiary" text="Done" />
      <div className="footer">
        <Logo />
      </div>
    </div>
  );
};
