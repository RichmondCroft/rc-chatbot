import React, { ReactNode } from "react";
import "./ChatBubble.css";

export interface ChatBubbleProps {
  variant: string;
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  sender: string;
  rounded?: boolean;
}

export const ChatBubble: React.FC<ChatBubbleProps> = (
  props: ChatBubbleProps
) => {
  const {
    variant = "chat-primary",
    children,
    backgroundColor,
    textColor,
    sender,
    rounded,
    ...rest
  } = props;

  const classes = ["ChatBubble", variant];

  if (sender === "me") {
    classes.push("sender-me");
  } else {
    classes.push("sender-other");
  }

  if (rounded) {
    classes.push("rounded");
  }

  return (
    <div
      className={classes.join(" ")}
      style={{ background: backgroundColor, color: textColor }}
      {...rest}
    >
      {children}
    </div>
  );
};
