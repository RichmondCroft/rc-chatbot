import React, { useState } from "react";
import styled from "styled-components";

import { ChatBox } from "./Component/ChatBox/ChatBox";
import { ChatBotContext } from "./Context";

const AppWrapper = styled.div``;

function App() {
  const [global, setGlobal] = useState<object>({});

  const addToGlobal = (name: string, value: any) => {
    const newGlobal = { ...global, [name]: value };
    setGlobal(newGlobal);
  };

  return (
    <ChatBotContext.Provider value={{ global, addToGlobal }}>
      <AppWrapper>
        <ChatBox />
      </AppWrapper>
    </ChatBotContext.Provider>
  );
}

export default App;
