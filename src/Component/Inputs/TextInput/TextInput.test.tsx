import { render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TextInput } from "./TextInput";

describe("Checking text input component", () => {
  const mockSendMessage = jest.fn();

  it("should render text input component", () => {
    render(<TextInput name="title" sendMessage={mockSendMessage} />);

    expect(screen.getByTestId("TextInput__text-input")).toHaveValue("");

    userEvent.type(screen.getByTestId("TextInput__text-input"), "John Doe");

    expect(mockSendMessage).not.toHaveBeenCalled();
    expect(screen.getByTestId("TextInput__text-input")).toHaveValue("John Doe");
  });

  it("should empty input field after sending message", () => {
    render(<TextInput name="title" sendMessage={mockSendMessage} />);

    userEvent.type(screen.getByTestId("TextInput__text-input"), "John Doe");
    fireEvent.click(screen.getByTestId("TextInput__submit-btn"));

    expect(mockSendMessage).toHaveBeenCalled();
    expect(mockSendMessage).toHaveBeenCalledWith("John Doe");
    expect(screen.getByTestId("TextInput__text-input")).toHaveValue("");
  });

  it("should not send message if field is empty", () => {
    render(<TextInput name="title" sendMessage={mockSendMessage} />);

    fireEvent.click(screen.getByTestId("TextInput__submit-btn"));

    expect(mockSendMessage).not.toHaveBeenCalled();
    expect(screen.getByTestId("TextInput__text-input")).toHaveValue("");
  });

  it("should paste text in input field", () => {
    render(<TextInput name="title" sendMessage={mockSendMessage} />);

    userEvent.paste(screen.getByTestId("TextInput__text-input"), "Copied text");

    expect(screen.getByTestId("TextInput__text-input")).toHaveValue(
      "Copied text"
    );
  });
  it("Should test for enter key press event ", () => {
    render(<TextInput name="title" sendMessage={mockSendMessage} />);
    userEvent.type(screen.getByTestId("TextInput__text-input"), "John Doe");
    const inputElement = screen.getByTestId("TextInput__text-input");
    fireEvent.keyPress(inputElement, { key: "Enter", code: 13, charCode: 13 });
    expect(mockSendMessage).toHaveBeenCalled();
    expect(mockSendMessage).toHaveBeenCalledWith("John Doe");
    expect(screen.getByTestId("TextInput__text-input")).toHaveValue("");
  });
});
