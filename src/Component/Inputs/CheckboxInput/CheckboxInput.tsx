import React, { useState, useContext } from "react";
import { SubmitButton } from "../SubmitButton";
import { ChatBotContext } from "../../../Context";

import { InputWrapper } from "../InputStyles";

export interface CheckboxInputProps {
  name: string | undefined;
  sendMessage: any;
  options: any;
}

export const CheckboxInput = (props: CheckboxInputProps) => {
  const { name, sendMessage, options } = props;
  const [valueArr, setValueArr] = useState<Array<string>>([]);

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
        {options.map((el: any) => (
          <li key={el.value}>
            <input
              type="checkbox"
              key={el.id}
              value={el.value}
              name={name}
              onChange={onChangeHandler}
            />
            {el.value}
          </li>
        ))}
      </ul>
      <SubmitButton onSubmitHandler={onSubmitHandler} />
    </InputWrapper>
  );
};
