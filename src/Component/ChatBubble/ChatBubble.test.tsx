import React from "react";

import { render, screen } from "@testing-library/react";

import { ChatBubble } from "./ChatBubble";

describe("Checking ChatBubble component", () => {
  const mockMessageObj = {
    messageId: 1,
    id: "user",
    displayName: "John Doe",
    align: "right",
    message: "Test message",
    delay: 0,
    input: {
      type: "answer",
    },
  };

  it("should render chat bubble component", () => {
    render(
      <ChatBubble
        id={mockMessageObj.id}
        messageId={mockMessageObj.messageId}
        align={mockMessageObj.align}
        displayName={mockMessageObj.displayName}
      >
        {mockMessageObj.message}
      </ChatBubble>
    );

    expect(screen.getByTestId("ChatBubble__1")).toHaveTextContent(
      "Test message"
    );
  });
});
