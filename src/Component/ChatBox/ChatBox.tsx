import React, { ReactNode } from "react";
import "./ChatBox.css";

export interface ChatBoxProps {
  variant: string;
  children: ReactNode;
  backgroundColor?: string;
}

export const ChatBox = (props: ChatBoxProps) => {
  const { variant, children, backgroundColor, ...rest } = props;
  return (
    <div
      className={`ChatBox ${variant}`}
      style={{ background: backgroundColor }}
      {...rest}
    >
      {children}
    </div>
  );
};
