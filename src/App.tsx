import React from "react";
import styled from "styled-components";

import { ChatBox } from "./Component/ChatBox/ChatBox";

import { dummyData } from "./Component/dummyData";

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <h1>Chatbot</h1>
      <ChatBox dummyData={dummyData} />
    </AppWrapper>
  );
}

export default App;
