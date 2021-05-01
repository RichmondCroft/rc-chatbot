import React, { ReactNode } from "react";
import styled from "styled-components";

import {
  SPACER,
  COLOR,
  BORDER_RADIUS,
  BOX_SHADOW,
  FONT_SIZE,
  FONT_WEIGHT,
} from "../../constants";

export interface ChatBubbleProps {
  children: ReactNode;
  messageId: number;
  id: string;
  displayName: string;
  align: string;
}

const ChatBubbleWrapper = styled.div`
  position: relative;
  margin-top: ${SPACER};
  display: flex;
  order: 1;
`;

const StyledChatBubble = styled.div`
  display: inline-block;
  padding: calc(0.5 * ${SPACER}) calc(0.75 * ${SPACER});
  border-radius: ${BORDER_RADIUS};
  font-size: ${FONT_SIZE.chatBubbleText};
  background-color: ${COLOR.white};
  box-shadow: ${BOX_SHADOW};
`;

const ChatBubbleHeader = styled.div`
  position: absolute;
  top: calc(-1.1 * ${SPACER});
  left: calc(0.25 * ${SPACER});
  font-size: ${FONT_SIZE.displayName};
  font-weight: ${FONT_WEIGHT.displayName};
  color: ${COLOR.black};
`;

export const ChatBubble: React.FC<ChatBubbleProps> = (
  props: ChatBubbleProps
) => {
  const { children, id, displayName, align, messageId } = props;

  return (
    <ChatBubbleWrapper
      style={{
        alignSelf: align === "left" ? "flex-start" : "flex-end",
        justifyContent: align === "left" ? "flex-start" : "flex-end",
      }}
    >
      <StyledChatBubble data-testid={`ChatBubble__${messageId}`}>
        {children}
      </StyledChatBubble>
      <ChatBubbleHeader>{id !== "user" && displayName}</ChatBubbleHeader>
    </ChatBubbleWrapper>
  );
};
