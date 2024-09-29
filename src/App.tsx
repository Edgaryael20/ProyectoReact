import { useState } from "react";
import Content from "./Content";
import OpenChatFrame from "./OpenChatFrame";
import Form from "./cart";
import "./Content.css"

type Chat = {
  path: string;
  title: string;
};


function App() {
  const [leftChat, setLeftChat] = useState<Chat>({
    path: "",
    title: "Selecciona una de las conversaciones",
  });
  
  return (
    <>
    <Form></Form>
      <div className="texto">
      
        <OpenChatFrame {...leftChat} />
      </div>
      <Content
        onSelectLeftChat={(path, title) => setLeftChat({ path, title })}
       
      />
      <div className="">
      </div>
    </>


  );
}

export default App;
