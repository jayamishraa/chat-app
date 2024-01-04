import { useState } from "react";
import ChatList from "./components/ChatList";
import Header from "./components/Header";
import InputSend from "./components/InputSend";
import './index.css'

function App() {
  const [messages, setMessages] = useState([
    {
      user: 'person1',
      body: 'test message'
    }
  ])
  const [loader, setLoader] = useState(false)

  return (
    <div className="App">
      <Header />
      <ChatList 
        messages={messages} 
        loader={loader}
      />
      <InputSend 
        messages={messages}
        setMessages={setMessages}
        setLoader={setLoader}
      />
    </div>
  );
}

export default App;
