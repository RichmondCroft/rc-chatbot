import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { ChatBubble } from "../ChatBubble/ChatBubble";
import { actor } from "../dummyData";

export interface ChatBoxProps {
  dummyData: actor[];
}

const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  max-height: 75vh;
  margin: 0 auto;
  padding: 0.5em;
  gap: 1rem;
  background-color: rgb(244, 245, 247);
  border: 2px solid #000;
`;

const MessagesWrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0em;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const MessageInput = styled.textarea`
  flex: 1;
  padding: 0.5rem 1rem;
  border: 2px solid #000;
`;

const EnterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 2px solid #000;
  border-radius: 3px;
`;

export const ChatBox = (props: ChatBoxProps) => {
  const { dummyData } = props;

  const [message, setMessage] = useState<string>("");
  const [messageArray, setMessageArray] = useState<Array<actor>>([]);

  const messagesWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageArray.length === 0) {
      setMessageArray(dummyData);
    } else {
      scrollToBottom();
    }
  }, [messageArray.length]);

  const sendMessage = () => {
    if (message === "") {
      return;
    }

    const messageObj: actor = {
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
    const botObj: actor = {
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
