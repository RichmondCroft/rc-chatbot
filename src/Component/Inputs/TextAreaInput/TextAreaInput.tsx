import React, { useState, useContext } from "react";
import { SubmitButton } from "../SubmitButton";
import { ChatBotContext } from "../../../Context";

import { InputWrapper, StyledTextAreaInput } from "../InputStyles";

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
  const handleKeyPress = (e:React.KeyboardEvent<HTMLTextAreaElement>)=>{
    if(e.charCode === 13){
      onSubmitHandler();
    }
  };

  return (
    <InputWrapper>
      <StyledTextAreaInput
        rows={2}
        name={name}
        value={value}
        data-testid="TextAreaInput__text-input"
        onChange={onChangeHandler}
        onKeyPress={e=>handleKeyPress(e)}
      />
      <SubmitButton
        testid="TextAreaInput__submit-btn"
        onSubmitHandler={onSubmitHandler}
      />
    </InputWrapper>
  );
};
