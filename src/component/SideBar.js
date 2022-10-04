import React from "react";
import SidebarChat from "./SidebarChat";

import { useEffect, useState } from "react";

import "./SideBar.css";

function SideBar() {
  const [users, setUsers] = useState([]);
  const [number, setNumber] = useState(1);

  const getUserInfo = async () => {
    const results = await fetch(`https://randomuser.me/api?page=${number}`);
    const data = await results.json();
    setUsers((prev) => {
      return [...prev, ...data.results];
    });
    setNumber(data.info.page + 1);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

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
        <button
          className="sidebar_newcharBtn"
          onClick={() => {
            getUserInfo();
          }}
        >
          Start a new chat
        </button>

        {users.map((user, index) => {
          return [<SidebarChat user={user} index={index} />];
        })}
      </div>
    </div>
  );
}

export default SideBar;
