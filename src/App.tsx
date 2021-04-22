import React, { useState } from "react";
import styled from "styled-components";

import ChatBox from "./Component/ChatBox/ChatBox";
import { ChatBotContext } from "./Context";
import { GlobalContext } from "./types";


const AppWrapper = styled.div``;

function App() {
  const [global, setGlobal] = useState<GlobalContext>({});

  const addToGlobal = (
    name: string | undefined,
    value: string | string[] | undefined
  ) => {
    if (!name || !value) {
      return;
    }

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
