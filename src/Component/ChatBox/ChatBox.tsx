import React, { ReactNode } from "react";
import "./ChatBox.css";

export interface ChatBoxProps {
  children: ReactNode;
}

export const ChatBox = (props: ChatBoxProps) => {
  const { children } = props;
  return <div className="ChatBox">{children}</div>;
};
