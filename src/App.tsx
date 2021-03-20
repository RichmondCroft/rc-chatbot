import React from "react";
import styled from "styled-components";

import { ChatBox } from "./Component/ChatBox/ChatBox";
import { ChatBubble } from "./Component/ChatBubble/ChatBubble";

import { dummyData } from "./Component/dummyData";

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <h1>Chatbot</h1>
      <ChatBox>
        {dummyData.map((el) => (
          <ChatBubble
            key={el.message}
            id={el.id}
            messageId={el.messageId}
            displayName={el.displayName}
            align={el.align}
          >
            {el.message}
          </ChatBubble>
        ))}
      </ChatBox>
    </AppWrapper>
  );
}

export default App;
