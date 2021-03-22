import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { ChatBubble } from "../ChatBubble/ChatBubble";
import { Actor } from "../../types";
import { COLOR, SPACER, BORDER, BORDER_RADIUS } from "../../variables";

export interface ChatBoxProps {
  dummyData: Actor[];
}

const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * ${SPACER});
  margin: ${SPACER};
  gap: ${SPACER};
  background-color: ${COLOR.grey};
  border: ${BORDER};
`;

const MessagesWrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: ${SPACER};
`;

const MessageInput = styled.textarea`
  flex: 1;
  padding: calc(0.5 * ${SPACER}) ${SPACER};
  border: ${BORDER};
`;

const EnterButton = styled.button`
  padding: calc(0.5 * ${SPACER}) calc(1.5 * ${SPACER});
  border: ${BORDER};
  border-radius: ${BORDER_RADIUS};
`;

export const ChatBox = (props: ChatBoxProps) => {
  const { dummyData } = props;

  const [message, setMessage] = useState<string>("");
  const [messageArray, setMessageArray] = useState<Array<Actor>>([]);

  const messagesWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageArray.length === 0) {
      setMessageArray(dummyData);
    } else {
      scrollToBottom();
    }
  }, [messageArray.length]);

  const sendMessage = () => {
    if (!message) {
      return;
    }

    const messageObj: Actor = {
      messageId: 1,
      id: "user",
      displayName: "John Doe",
      align: "right",
      message,
    };

    setMessage("");
    const arr = messageArray;
    arr.push(messageObj);
    setMessageArray(arr);

    botMessage();
  };

  const botMessage = () => {
    const botObj: Actor = {
      messageId: 1,
      id: "chatbot",
      displayName: "Bot",
      align: "left",
      message: "Etiam a mi ullamcorper, cursus est messageId, convallis neque.",
    };

    const newArr = messageArray;
    newArr.push(botObj);
    setMessageArray(newArr);
  };

  const scrollToBottom = () => {
    if (messagesWrapperRef.current) {
      const node = messagesWrapperRef.current;
      node.scrollTop = node.scrollHeight;
    }
  };

  return (
    <ChatBoxWrapper>
      <MessagesWrapper ref={messagesWrapperRef}>
        {messageArray.map((el) => (
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
      </MessagesWrapper>
      <InputWrapper>
        <MessageInput
          rows={1}
          placeholder="Enter Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <EnterButton type="submit" onClick={sendMessage}>
          Send
        </EnterButton>
      </InputWrapper>
    </ChatBoxWrapper>
  );
};
