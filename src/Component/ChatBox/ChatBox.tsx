import React, { useEffect, useState, useRef } from "react";

import { Actor, InputObject } from "../../types";
import {
  ChatBoxWrapper,
  MessagesWrapper,
  ErrorWrapper,
  MessageArea,
} from "./ChatBoxStyles";
import { BOT_QUESTIONS } from "../dummyData";

import { Avatar } from "../Avatar/Avatar";
import UserImg from "../../Assets/User.png";

import { ChatBubble } from "../ChatBubble/ChatBubble";
import { TextInput } from "../Inputs/TextInput/TextInput";
import { TextAreaInput } from "../Inputs/TextAreaInput/TextAreaInput";
import { RadioInput } from "../Inputs/RadioInput/RadioInput";
import { CheckboxInput } from "../Inputs/CheckboxInput/CheckboxInput";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const ChatBox = () => {
  const [messageArray, setMessageArray] = useState<Actor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const messagesWrapperRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState<InputObject>({ type: "empty" });

  useEffect(() => {
    if (messageArray.length === 0) {
      botMessage();
    } else {
      scrollToBottom();
    }
  }, [setMessageArray.length]);

  const sendMessage = (message: string) => {
    if (!message) {
      return;
    }

    const messageObj: Actor = {
      messageId: 101,
      id: "user",
      displayName: "John Doe",
      align: "right",
      message,
      delay: 0,
      input: {
        type: "answer",
      },
      imgsrc: UserImg,
    };

    const arr = messageArray;
    arr.push(messageObj);
    setMessageArray(arr);
    botMessage();
  };

  const botMessage = () => {
    setLoading(true);
    const botObj: Actor = BOT_QUESTIONS[questionIndex];

    setTimeout(() => {
      const newArr = messageArray;
      newArr.push(botObj);
      setMessageArray(newArr);
      setInput(botObj.input);
      setQuestionIndex(questionIndex + 1);
      setLoading(false);
    }, botObj.delay);
  };

  const scrollToBottom = () => {
    if (messagesWrapperRef.current) {
      const node = messagesWrapperRef.current;
      node.scrollTop = node.scrollHeight;
    }
  };

  let inputComponent;
  switch (input.type) {
    case "text":
      inputComponent = (
        <TextInput name={input.name} sendMessage={sendMessage} />
      );
      break;

    case "textarea":
      inputComponent = (
        <TextAreaInput name={input.name} sendMessage={sendMessage} />
      );
      break;

    case "radio":
      inputComponent = (
        <RadioInput
          name={input.name}
          sendMessage={sendMessage}
          options={input.options}
        />
      );
      break;

    case "checkbox":
      inputComponent = (
        <CheckboxInput
          name={input.name}
          sendMessage={sendMessage}
          options={input.options}
        />
      );
      break;

    case "empty":
      inputComponent = <div />;
      break;

    default:
      inputComponent = (
        <ErrorWrapper>
          <b>Invalid input component type</b>
        </ErrorWrapper>
      );
  }

  return (
    <ChatBoxWrapper data-testid="ChatBox__wrapper">
      <MessagesWrapper ref={messagesWrapperRef}>
        {messageArray.map((el) => (
          <MessageArea align={el.align} key={el.message}>
            <Avatar imgsrc={el.imgsrc} order={el.align === "left" ? 1 : 2} />
            <ChatBubble
              id={el.id}
              messageId={el.messageId}
              displayName={el.displayName}
              align={el.align}
            >
              {el.message}
            </ChatBubble>
          </MessageArea>
        ))}
        {loading && (
          <ChatBubble
            id="loadingId"
            messageId={1052}
            displayName="Bot"
            align="left"
          >
            <LoadingAnimation />
          </ChatBubble>
        )}
      </MessagesWrapper>
      {inputComponent}
    </ChatBoxWrapper>
  );
};

export default ChatBox;
