import React, { useState, useContext } from "react";
import { SubmitButton } from "../SubmitButton";
import { ChatBotContext } from "../../../Context";

import { InputWrapper } from "../InputStyles";

import { sendMessageFunc, Options } from "../../../types";

export interface RadioInputProps {
  name: string | undefined;
  sendMessage: sendMessageFunc;
  options: Options[] | undefined;
}

export const RadioInput = (props: RadioInputProps) => {
  const { name, sendMessage, options } = props;
  const [value, setValue] = useState<string>("");

  const context = useContext(ChatBotContext);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setValue(event.target.value);
  };

  const onSubmitHandler = () => {
    if (value === "") {
      return;
    }

    context.addToGlobal(name, value);
    sendMessage(value);
    setValue("");
  };

  return (
    <InputWrapper>
      <div>
        {options &&
          options.map((option: Options) => (
            <div key={option.value}>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChangeHandler}
              />
              {option.value}
            </div>
          ))}
      </div>
      <SubmitButton onSubmitHandler={onSubmitHandler} />
    </InputWrapper>
  );
};
