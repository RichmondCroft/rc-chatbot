import React from "react";
import { EnterButton } from "./InputStyles";

export interface SubmitButtonProps {
  onSubmitHandler: () => void;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  const { onSubmitHandler } = props;
  return (
    <EnterButton type="submit" onClick={onSubmitHandler}>
      Send
    </EnterButton>
  );
};
