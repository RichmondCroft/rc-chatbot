import React, { ReactNode } from "react";
import styled from "styled-components";

export interface ChatBubbleProps {
  children: ReactNode;
  messageId: number;
  id: string;
  displayName: string;
  align: string;
}

const ChatBubbleWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  display: flex;
`;

const StyledChatBubble = styled.div`
  display: inline-block;
  padding: 0.5rem 0.75rem;
  border-radius: 3px;
  font-size: 0.8rem;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(23 43 77 / 20%) 0px 1px 1px, rgb(23 43 77 / 20%) 0px 0px 1px;
`;

const ChatBubbleHeader = styled.div`
  position: absolute;
  top: -1.1rem;
  left: 0.25rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: #000;
`;

export const ChatBubble: React.FC<ChatBubbleProps> = (
  props: ChatBubbleProps
) => {
  const { children, id, displayName, align } = props;

  return (
    <ChatBubbleWrapper
      style={{
        alignSelf: align === "left" ? "flex-start" : "flex-end",
        justifyContent: align === "right" ? "flex-end" : "flex-start",
      }}
    >
      <StyledChatBubble>{children}</StyledChatBubble>
      <ChatBubbleHeader>{id !== "user" && displayName}</ChatBubbleHeader>
    </ChatBubbleWrapper>
  );
};
