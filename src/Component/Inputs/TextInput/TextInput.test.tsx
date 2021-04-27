import { TextInput } from "./TextInput";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Checking text input component", () => {
  it("should render text input component", () => {
    const sendMessage = (message: string) => {};

    render(<TextInput name="title" sendMessage={sendMessage} />);

    userEvent.type(screen.getByTestId("input-text"), "John Doe");
    expect(screen.getByTestId("input-text")).toHaveValue("John Doe");
  });

  it("should empty input field after sending message", () => {
    const sendMessage = (message: string) => {};

    render(<TextInput name="title" sendMessage={sendMessage} />);

    userEvent.type(screen.getByTestId("input-text"), "John Doe");
    fireEvent.click(screen.getByText("Send"));

    expect(screen.getByTestId("input-text")).toHaveValue("");
  });

  it("should not send message if field is empty", () => {
    const sendMessage = (message: string) => {};

    render(<TextInput name="title" sendMessage={sendMessage} />);

    fireEvent.click(screen.getByText("Send"));

    expect(screen.getByTestId("input-text")).toHaveValue("");
  });

  it("should paste text in input field", () => {
    const sendMessage = (message: string) => {};

    render(<TextInput name="title" sendMessage={sendMessage} />);

    userEvent.paste(screen.getByTestId("input-text"), "Copied text");

    expect(screen.getByTestId("input-text")).toHaveValue("Copied text");
  });
});
