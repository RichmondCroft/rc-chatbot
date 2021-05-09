import {render,screen} from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar Component",()=>{
    test("Render avatar component to have order of 1",()=>{
        render(<Avatar align="left"/>);
        expect(screen.getByTestId("Avatar_image-wrapper")).toBeInTheDocument();
        expect(screen.getByTestId("Avatar_image-icon")).toHaveAttribute("align","left");
    });

});

