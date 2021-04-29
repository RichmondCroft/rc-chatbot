import React from "react";
import {findByTestId, render,screen} from "@testing-library/react";
import {Heading,HeadingProp} from "./Heading";

describe("Checking Heading component",()=>{
    test('should render heading component with Primary heading',()=>{
       render(<Heading id="primary" size="medium">{"Primary heading"}</Heading>);
       expect(screen.getByTestId("Heading")).toHaveTextContent("Primary heading");
     });
});
