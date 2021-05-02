import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import ChatBox from "./ChatBox";

describe("Checking ChatBox component", () => {
  it("should render ChatBox component", async () => {
    render(<ChatBox />);

    expect(screen.getByTestId("ChatBox")).toBeInTheDocument();
    expect(screen.getByTestId("LoadingAnimation")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId("ChatBubble__1")).toBeInTheDocument();
      expect(screen.getByTestId("TextInput__text-input")).toBeInTheDocument();
    });
  });

  it("should render first message after delay and textarea as second input", async () => {
    render(<ChatBox />);

    await waitFor(() => {
      expect(screen.getByTestId("ChatBubble__1")).toBeInTheDocument();
      expect(screen.getByTestId("TextInput__text-input")).toBeInTheDocument();
    });

    userEvent.type(screen.getByTestId("TextInput__text-input"), "John");
    expect(screen.getByTestId("TextInput__text-input")).toHaveValue("John");

    fireEvent.click(screen.getByTestId("TextInput__submit-btn"));

    expect(screen.getByTestId("ChatBubble__101")).toHaveTextContent("John");

    await waitFor(() =>
      expect(
        screen.getByTestId("TextAreaInput__text-input")
      ).toBeInTheDocument()
    );
  });
});
