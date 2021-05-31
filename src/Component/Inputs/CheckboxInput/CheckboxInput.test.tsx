import { render, screen, fireEvent } from "@testing-library/react";

import { CheckboxInput } from "./CheckboxInput";

describe("Checking CheckboxInput component", () => {
  const mockSendMessage = jest.fn();
  const mockOptions = [
    { id: 1, value: "Option1" },
    { id: 2, value: "Option2" },
    { id: 3, value: "Option3" },
  ];

  beforeEach(() =>
    render(
      <CheckboxInput
        name="title"
        options={mockOptions}
        sendMessage={mockSendMessage}
      />
    )
  );

  it("should render checkbox input component", () => {
    const option1 = screen.getByTestId("CheckboxInput__Option1");

    fireEvent.click(option1);
    expect(option1).toBeChecked();

    expect(mockSendMessage).not.toHaveBeenCalled();
  });

  it("should not send message if no option is selected", () => {
    const submitButton = screen.getByTestId("CheckboxInput__submit-btn");

    fireEvent.click(submitButton);

    expect(mockSendMessage).not.toHaveBeenCalled();
  });

  it("should send message if option is selected", () => {
    const option1 = screen.getByTestId("CheckboxInput__Option1");
    const submitButton = screen.getByTestId("CheckboxInput__submit-btn");

    fireEvent.click(option1);
    expect(option1).toBeChecked();

    fireEvent.click(submitButton);

    expect(mockSendMessage).toHaveBeenCalled();
    expect(mockSendMessage).toHaveBeenCalledWith("Option1");
  });

  it("should send message with correct option if options are selected", () => {
    const option1 = screen.getByTestId("CheckboxInput__Option1");
    const option2 = screen.getByTestId("CheckboxInput__Option2");
    const option3 = screen.getByTestId("CheckboxInput__Option3");
    const submitButton = screen.getByTestId("CheckboxInput__submit-btn");

    fireEvent.click(option2);
    fireEvent.click(option3);
    fireEvent.click(option1);
    fireEvent.click(option3);

    expect(option1).toBeChecked();
    expect(option2).toBeChecked();
    expect(option3).not.toBeChecked();

    fireEvent.click(submitButton);

    expect(mockSendMessage).toHaveBeenCalled();
    expect(mockSendMessage).toHaveBeenCalledWith("Option2, Option1");
  });
  it("should not send message on enter key if no option ", () => {
    const option1 = screen.getByTestId("CheckboxInput__Option1");
    fireEvent.keyPress(option1,{key:"Enter",charCode:13});

    expect(mockSendMessage).not.toHaveBeenCalled();
  });

  it("should send message on enter key if option is selected", () => {
    const option1 = screen.getByTestId("CheckboxInput__Option1");

    fireEvent.click(option1);
    expect(option1).toBeChecked();
    fireEvent.keyPress(option1,{key:"Enter",charCode:13});

    expect(mockSendMessage).toHaveBeenCalled();
    expect(mockSendMessage).toHaveBeenCalledWith("Option1");
  });
});
