import React from "react";

import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="userChat">
      <img
        className="userChatImg"
        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
      ></img>
      <span className="userChatName">user name@gmail.com</span>
    </div>
  );
}

export default SidebarChat;
