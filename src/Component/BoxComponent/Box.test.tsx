import {render,screen,} from "@testing-library/react";
import Box from "./Box";

describe("Box component",()=>{
    test("renders box component on the screen",()=>{
        render(<Box id="primary-box" size="small">Box component</Box>);
        expect(screen.getByTestId("Box_component")).toBeInTheDocument();
    });
    test("Box component to have id of primary-box",()=>{
        render(<Box id="primary-box" size="medium">Box component</Box>);
        expect(screen.getByTestId("Box_component")).toHaveAttribute("id","primary-box");
    });
});