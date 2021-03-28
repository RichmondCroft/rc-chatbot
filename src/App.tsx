import React from "react";
import styled from "styled-components";

import { ChatBox } from "./Component/ChatBox/ChatBox";

import dummyData from "./Component/dummyData";


const AppWrapper = styled.div``;

function App() {
  return (
    <AppWrapper>
      <ChatBox dummyData={dummyData} />
    </AppWrapper>
  );
}

export default App;
