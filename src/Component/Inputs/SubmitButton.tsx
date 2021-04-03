import React from "react";
import { EnterButton } from "./InputStyles";

export interface SubmitButtonProps {
  onSubmitHandler: any;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  const { onSubmitHandler } = props;
  return (
    <EnterButton type="submit" onClick={onSubmitHandler}>
      Send
    </EnterButton>
  );
};
