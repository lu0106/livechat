import React from "react";
import { useState } from "react";

import "./Chat.css";

function Chat(props) {
  const [chatInput, setChatInput] = useState("");

  const handleSubmit = () => {
    if (chatInput == "") return;
    props.setText((prev) => {
      return [
        ...prev,
        {
          text: chatInput,
        },
      ];
    });
    setChatInput("");
  };

  return (
    <div className="chat">
      <div className="chatHeader">
        <img
          className="chatIcon"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        ></img>
        <p className="chatUserName">name</p>
        <p className="chatUserMail">user@gmail.com</p>
      </div>
      <div className="chatBody">
        {props.text.map((text, index) => {
          if (text.get !== undefined)
            return [
              <p key={index} className="chatTextGet">
                {text.get}
              </p>,
            ];
          if (text.text !== undefined)
            return [
              <p key={index} className="chatTextSend">
                {text.text}
              </p>,
            ];
        })}
      </div>
      <div className="chatFooter">
        <img
          className="chatIcon2"
          src="https://i.pinimg.com/originals/f2/ae/15/f2ae153238aef25880ac423ece7fb324.png"
        ></img>
        <input
          value={chatInput}
          onChange={(e) => {
            setChatInput(e.target.value);
          }}
          className="chatInput"
        ></input>
        <img
          onClick={() => handleSubmit()}
          className="chatIcon2"
          src="https://cdn-icons-png.flaticon.com/512/46/46076.png"
        ></img>
      </div>
    </div>
  );
}

export default Chat;
