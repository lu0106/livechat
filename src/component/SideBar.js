import React from "react";
import SidebarChat from "./SidebarChat";

import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <img
          className="user_icon"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt=""
        />
        <img
          className="message_icon"
          src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/text-message-icon.png"
          alt=""
        />
        <img
          className="setting_icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1200px-Windows_Settings_app_icon.png"
          alt=""
        />
      </div>
      <div className="sidebar_body">
        <img
          className="search_icon"
          src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
          alt=""
        />
        <input
          className="sidebar_input"
          type="text"
          placeholder="Search in Chats"
        />
        <button className="sidebar_newcharBtn">Start a new chat</button>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default SideBar;
