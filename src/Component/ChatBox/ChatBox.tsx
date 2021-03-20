import React, { ReactNode } from "react";
import styled from "styled-components";
// import "./ChatBox.css";

export interface ChatBoxProps {
  children: ReactNode;
}

const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  max-height: 500px;
  margin: 0 auto;
  padding: 0.5em;
  gap: 1rem;
  overflow-y: auto;
  background-color: rgb(244, 245, 247);

  &::-webkit-scrollbar {
    width: 0.25em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(50, 50, 50);
    border-radius: 5em;
  }
`;

export const ChatBox = (props: ChatBoxProps) => {
  const { children } = props;
  return <ChatBoxWrapper>{children}</ChatBoxWrapper>;
};
