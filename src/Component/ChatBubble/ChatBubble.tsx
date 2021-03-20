import React, { ReactNode } from "react";
import "./ChatBubble.css";

export interface ChatBubbleProps {
  children: ReactNode;
  messageId?: number;
  id?: string;
  displayName?: string;
  align?: string;
}

export const ChatBubble: React.FC<ChatBubbleProps> = (
  props: ChatBubbleProps
) => {
  const { children, id, displayName, align } = props;

  return (
    <div
      className="Chat-container"
      style={{
        alignSelf: align === "left" ? "flex-start" : "flex-end",
        justifyContent: align === "right" ? "flex-end" : "flex-start",
      }}
    >
      <div className="ChatBubble">{children}</div>
      <div className="displayName">{id !== "user" && displayName}</div>
    </div>
  );
};
