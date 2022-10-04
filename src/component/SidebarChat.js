import React from "react";

import "./SidebarChat.css";

function SidebarChat(props) {
  const getUserInfo = (user) => {
    const userInfo = [`${user.name.first} ${user.name.last}`];
    return (
      <>
        <p className="userChatName">{userInfo}</p>
        <img className="userChatImg" src={user.picture.large}></img>
      </>
    );
  };

  return <div className="userChat">{getUserInfo(props.user)}</div>;
}

export default SidebarChat;
