import React, { useState, useContext } from "react";
import { SubmitButton } from "../SubmitButton";
import { ChatBotContext } from "../../../Context";

import { InputWrapper } from "../InputStyles";

import { sendMessageFunc, Options } from "../../../types";

export interface CheckboxInputProps {
  name: string | undefined;
  sendMessage: sendMessageFunc;
  options: Options[] | undefined;
}

export const CheckboxInput = (props: CheckboxInputProps) => {
  const { name, sendMessage, options } = props;
  const [valueArr, setValueArr] = useState<string[]>([]);

  const context = useContext(ChatBotContext);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const optionName = event.target.value;
    let newValue = valueArr;
    if (isChecked(optionName)) {
      newValue = newValue.filter((el) => el !== optionName);
    } else {
      newValue.push(optionName);
    }
    setValueArr(newValue);
  };

  const isChecked = (option: string) => valueArr.indexOf(option) >= 0;

  const onSubmitHandler = () => {
    if (valueArr.length === 0) {
      return;
    }

    context.addToGlobal(name, valueArr);
    sendMessage(valueArr.join(", "));
    setValueArr([]);
  };

  return (
    <InputWrapper>
      <ul style={{ listStyle: "none" }}>
        {options &&
          options.map((el: Options) => (
            <li key={el.value}>
              <input
                type="checkbox"
                name={name}
                value={el.value}
                data-testid={`CheckboxInput__${el.value}`}
                onChange={onChangeHandler}
              />
              {el.value}
            </li>
          ))}
      </ul>
      <SubmitButton
        testid="CheckboxInput__submit-btn"
        onSubmitHandler={onSubmitHandler}
      />
    </InputWrapper>
  );
};
