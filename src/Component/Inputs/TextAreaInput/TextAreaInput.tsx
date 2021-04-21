import React, { useState, useContext } from "react";
import { SubmitButton } from "../SubmitButton";
import { ChatBotContext } from "../../../Context";

import { InputWrapper } from "../InputStyles";

import { sendMessageFunc } from "../../../types";

export interface TextAreaInputProps {
  name: string | undefined;
  sendMessage: sendMessageFunc;
}

export const TextAreaInput = (props: TextAreaInputProps) => {
  const { name, sendMessage } = props;
  const [value, setValue] = useState<string>("");

  const context = useContext(ChatBotContext);

  const onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setValue(event.target.value);
  };

  const onSubmitHandler = () => {
    if (value.trim() === "") {
      return;
    }

    context.addToGlobal(name, value);
    sendMessage(value);
    setValue("");
  };

  return (
    <InputWrapper>
      <textarea
        rows={2}
        name={name}
        value={value}
        onChange={onChangeHandler}
        style={{ flex: 1 }}
      />
      <SubmitButton onSubmitHandler={onSubmitHandler} />
    </InputWrapper>
  );
};
