import React from "react";
import { EnterButton } from "./InputStyles";

export interface SubmitButtonProps {
  onSubmitHandler: () => void;
  testid?: string;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  const { onSubmitHandler, testid } = props;
  return (
    <EnterButton type="submit" data-testid={testid} onClick={onSubmitHandler}>
      Send
    </EnterButton>
  );
};
