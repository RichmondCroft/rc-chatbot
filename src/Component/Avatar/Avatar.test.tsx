import React from 'react';
import {render,screen} from "@testing-library/react";
import Avatar from "./Avatar";

describe("Avatar Component",()=>{
    test("Render avatar component to have order of 1",()=>{
        render(<Avatar order={1}/>);
        expect(screen.getByTestId("AvatarComponent")).toHaveAttribute("order","1");
    });
    test("Test Avatar component rendering image component",()=>{
        render(<Avatar order={1}/>);
        expect(screen.getByTestId("AvatarImage")).toBeInTheDocument;
    });
});

