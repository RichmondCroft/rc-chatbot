import React from "react";
import {render,screen,fireEvent} from "@testing-library/react";
import Button from "./Button";

describe("MultiButton component",()=>{
    test("MultiButton component is rendered on screen",()=>{
        const btnclick = jest.fn();
        render(<Button id="Linkbutton" onClick={btnclick}> Button</Button>);
        expect(screen.getByTestId("MultiButton")).toBeInTheDocument();
    });
    test("Expect button to have been clicked",()=>{
        const btnclick = jest.fn();
        render(<Button id="Actionbutton" onClick={btnclick}> Action Button</Button>);
        fireEvent.click(screen.getByTestId("MultiButton"));
        expect(btnclick).toHaveBeenCalled();
     });
});