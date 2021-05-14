import React from "react";
import {render,screen} from "@testing-library/react";
import Button from "./Button";

describe("Button component",()=>{
    test("Button component is rendered on screen",()=>{
        render(<Button id="primary-button" size="small">Button</Button>);
        expect(screen.getByTestId("Button_component")).toBeInTheDocument();
    });
    test("Button component having id of secondary-button",()=>{
        render(<Button id="secondary-button" size="small">Button</Button>);
        expect(screen.getByTestId("Button_component")).toHaveAttribute("id","secondary-button");
    });
});