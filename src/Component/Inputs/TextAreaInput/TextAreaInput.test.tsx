import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TextAreaInput } from "./TextAreaInput";

describe("Checking TextAreaInput component", () => {
  const mockSendMessage = jest.fn();

  it("should render textarea input component", () => {
    render(<TextAreaInput name="title" sendMessage={mockSendMessage} />);

    expect(screen.getByTestId("TextAreaInput__text-input")).toHaveValue("");

    userEvent.type(
      screen.getByTestId("TextAreaInput__text-input"),
      "Tests{backspace} string{enter} input"
    );

    expect(mockSendMessage).not.toHaveBeenCalled();
    expect(screen.getByTestId("TextAreaInput__text-input")).toHaveValue(
      "Test string\n input"
    );
  });

  it("should empty input field after sending message", () => {
    render(<TextAreaInput name="title" sendMessage={mockSendMessage} />);

    userEvent.type(
      screen.getByTestId("TextAreaInput__text-input"),
      "Test string input"
    );
    fireEvent.click(screen.getByTestId("TextAreaInput__submit-btn"));

    expect(mockSendMessage).toHaveBeenCalled();
    expect(mockSendMessage).toHaveBeenCalledWith("Test string input");
    expect(screen.getByTestId("TextAreaInput__text-input")).toHaveValue("");
  });

  it("should not send message if field is empty", () => {
    render(<TextAreaInput name="title" sendMessage={mockSendMessage} />);

    fireEvent.click(screen.getByTestId("TextAreaInput__submit-btn"));

    expect(mockSendMessage).not.toHaveBeenCalled();
    expect(screen.getByTestId("TextAreaInput__text-input")).toHaveValue("");
  });

  it("should paste text in input field", () => {
    render(<TextAreaInput name="title" sendMessage={mockSendMessage} />);

    userEvent.paste(
      screen.getByTestId("TextAreaInput__text-input"),
      "Copied text"
    );

    expect(screen.getByTestId("TextAreaInput__text-input")).toHaveValue(
      "Copied text"
    );
  });
});
