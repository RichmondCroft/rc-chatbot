import {render,screen} from "@testing-library/react";
import {Heading} from "./Heading";

describe("Checking Heading component",()=>{
    test("should render heading component with Primary heading",()=>{
       render(<Heading id="primary" size="medium">Primary heading</Heading>);
       expect(screen.getByTestId("Heading_text")).toHaveTextContent("Primary heading");
     });
});
