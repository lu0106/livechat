import SideBar from "./component/SideBar";
import Chat from "./component/Chat";

import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState([
    {
      text: "this is a text from you",
    },
    {
      text: "this is a text from you",
    },
    {
      get: "this is a text from other",
    },
    {
      text: "this is a text from you",
    },
    {
      get: "this is a text from other",
    },
    {
      get: "this is a text from other",
    },
  ]);

  return (
    <div className="App">
      <SideBar />
      <Chat text={text} setText={setText} />
    </div>
  );
}

export default App;
