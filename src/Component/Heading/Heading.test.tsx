import React from "react";
import {render,screen} from "@testing-library/react";
import {Heading} from "./Heading";

describe("Checking Heading component",()=>{
    test("should render heading component",()=>{
       render(<Heading id="primary-heading" size="medium">Primary heading</Heading>);
       expect(screen.getByTestId("Heading_text")).toBeInTheDocument();
    });
});
