import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import { CheckboxInput } from "./CheckboxInput";

describe("Checking CheckboxInput component", () => {
  const mockSendMessage = jest.fn();
  const mockOptions = [
    { id: 1, value: "Option1" },
    { id: 2, value: "Option2" },
    { id: 3, value: "Option3" },
  ];

  it("should render checkbox input component", () => {
    render(
      <CheckboxInput
        name="title"
        options={mockOptions}
        sendMessage={mockSendMessage}
      />
    );

    const option1 = screen.getByTestId("CheckboxInput__Option1");

    fireEvent.click(option1);
    expect(option1).toBeChecked();

    expect(mockSendMessage).not.toHaveBeenCalled();
  });

  it("should not send message if no option is selected", () => {
    render(
      <CheckboxInput
        name="title"
        options={mockOptions}
        sendMessage={mockSendMessage}
      />
    );

    fireEvent.click(screen.getByTestId("CheckboxInput__submit-btn"));

    expect(mockSendMessage).not.toHaveBeenCalled();
  });

  it("should send message if option is selected", () => {
    render(
      <CheckboxInput
        name="title"
        options={mockOptions}
        sendMessage={mockSendMessage}
      />
    );

    const option1 = screen.getByTestId("CheckboxInput__Option1");

    fireEvent.click(option1);
    expect(option1).toBeChecked();

    fireEvent.click(screen.getByTestId("CheckboxInput__submit-btn"));

    expect(mockSendMessage).toHaveBeenCalled();
    expect(mockSendMessage).toHaveBeenCalledWith("Option1");
  });

  it("should send message with correct option if options are selected", () => {
    render(
      <CheckboxInput
        name="title"
        options={mockOptions}
        sendMessage={mockSendMessage}
      />
    );

    const option1 = screen.getByTestId("CheckboxInput__Option1");
    const option2 = screen.getByTestId("CheckboxInput__Option2");
    const option3 = screen.getByTestId("CheckboxInput__Option3");

    fireEvent.click(option2);
    fireEvent.click(option3);
    fireEvent.click(option1);
    fireEvent.click(option3);

    expect(option1).toBeChecked();
    expect(option2).toBeChecked();
    expect(option3).not.toBeChecked();

    fireEvent.click(screen.getByTestId("CheckboxInput__submit-btn"));

    expect(mockSendMessage).toHaveBeenCalled();
    expect(mockSendMessage).toHaveBeenCalledWith("Option2, Option1");
  });
});
