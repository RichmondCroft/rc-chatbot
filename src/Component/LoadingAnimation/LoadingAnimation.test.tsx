import { render, screen } from "@testing-library/react";

import LoadingAnimation from "./LoadingAnimation";

describe("Checking LoadingAnimation component", () => {
  it("should render LoadingAnimation component", () => {
    render(<LoadingAnimation />);
    expect(screen.getByTestId("LoadingAnimation__wrapper")).toBeInTheDocument();
  });
});
