import React from "react";
import {render,screen,fireEvent} from "@testing-library/react";
import MultiButton from "./MultiButton";

describe("MultiButton component",()=>{
    test("MultiButton component is rendered on screen",()=>{
        const btnclick = jest.fn();
        render(<MultiButton id="Linkbutton" onClick={btnclick}> Button</MultiButton>);
        expect(screen.getByTestId("MultiButton_component")).toBeInTheDocument();
    });
    test("Expect button to have been clicked",()=>{
        const btnclick = jest.fn();
        render(<MultiButton id="Actionbutton" onClick={btnclick}> Action Button</MultiButton>);
        fireEvent.click(screen.getByTestId("MultiButton_component"));
        expect(btnclick).toHaveBeenCalled();
     });
});