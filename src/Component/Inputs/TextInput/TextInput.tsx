import React, { useContext, useState } from "react";
import { SubmitButton } from "../SubmitButton";
import { ChatBotContext } from "../../../Context";

import { InputWrapper, StyledTextInput } from "../InputStyles";

import { sendMessageFunc } from "../../../types";

export interface TextInputProps {
  name: string | undefined;
  sendMessage: sendMessageFunc;
}

export const TextInput = (props: TextInputProps) => {
  const { name, sendMessage } = props;
  const [value, setValue] = useState<string>("");

  const context = useContext(ChatBotContext);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
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
      <StyledTextInput
        type="text"
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
      <SubmitButton onSubmitHandler={onSubmitHandler} />
    </InputWrapper>
  );
};
