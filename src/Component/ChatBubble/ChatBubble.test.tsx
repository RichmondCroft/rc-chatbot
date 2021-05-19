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

  beforeEach(() =>
    render(
      <ChatBubble
        id={mockMessageObj.id}
        messageId={mockMessageObj.messageId}
        align={mockMessageObj.align}
        displayName={mockMessageObj.displayName}
      >
        {mockMessageObj.message}
      </ChatBubble>
    )
  );

  it("should render chat bubble component", () => {
    expect(screen.getByTestId("ChatBubble__1")).toHaveTextContent(
      "Test message"
    );
  });

  it("should align chat bubble to right", () => {
    expect(screen.getByTestId("ChatBubble__Wrapper")).toHaveStyle(
      "justify-content:flex-end"
    );
  });
});
