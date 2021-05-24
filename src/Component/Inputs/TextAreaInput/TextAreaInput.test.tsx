import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TextAreaInput } from "./TextAreaInput";

describe("Checking TextAreaInput component", () => {
  const mockSendMessage = jest.fn();

  beforeEach(() => {
    render(<TextAreaInput name="title" sendMessage={mockSendMessage} />);
  });

  it("should render textarea input component", () => {
    const textAreaInput = screen.getByTestId("TextAreaInput__text-input");

    expect(textAreaInput).toHaveValue("");

    userEvent.type(textAreaInput, "Tests{backspace} string{enter} input");
    expect(mockSendMessage).not.toHaveBeenCalled();
    expect(textAreaInput).toHaveValue("Test string\n input");
    
  });

  it("should empty input field after sending message", () => {
    const textAreaInput = screen.getByTestId("TextAreaInput__text-input");
    const submitButton = screen.getByTestId("TextAreaInput__submit-btn");

    userEvent.type(textAreaInput, "Test string input");
    fireEvent.click(submitButton);

    expect(mockSendMessage).toHaveBeenCalled();
    expect(mockSendMessage).toHaveBeenCalledWith("Test string input");
    expect(textAreaInput).toHaveValue("");
  });

  it("should not send message if field is empty", () => {
    const textAreaInput = screen.getByTestId("TextAreaInput__text-input");
    const submitButton = screen.getByTestId("TextAreaInput__submit-btn");

    fireEvent.click(submitButton);

    expect(mockSendMessage).not.toHaveBeenCalled();
    expect(textAreaInput).toHaveValue("");
  });

  it("should paste text in input field", () => {
    const textAreaInput = screen.getByTestId("TextAreaInput__text-input");

    userEvent.paste(textAreaInput, "Copied text");

    expect(textAreaInput).toHaveValue("Copied text");
  });
   it("should test for enter key press event", () =>{
    const textAreaInput = screen.getByTestId("TextAreaInput__text-input");
    userEvent.type(textAreaInput, "Test string input");
    fireEvent.keyPress(textAreaInput,{key:"Enter", code:13, charCode:13 });
    expect(mockSendMessage).toHaveBeenCalled();
    expect(mockSendMessage).toHaveBeenCalledWith("Test string input");
    expect(textAreaInput).toHaveValue("");

   });
});
