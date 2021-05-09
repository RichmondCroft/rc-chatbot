import { render, screen } from "@testing-library/react";
import Avatar, { ImgProps } from "./Avatar";

const props: ImgProps = {
    align: "left",
    imgSrc: ""
};


describe("Avatar Component", () => {
    test("Render avatar component to have order of 1", () => {
        render(<Avatar align="left" />);
        expect(screen.getByTestId("Avatar_image-wrapper")).toBeInTheDocument();
    });
    test("Testing left alignment of avatar icon", () => {
        render(<Avatar align="left" />);
        const avatarClass = Avatar(props)!.type.styledComponentId;
        const rootAvatar = document.getElementsByClassName(avatarClass);
        const style = window.getComputedStyle(rootAvatar[0]);
        expect(style.order).toBe("1");
    });
    test("Testing right alignment of avatar icon", () => {
        render(<Avatar align="right" />);
        const avatarClass = Avatar(props)!.type.styledComponentId;
        const rootAvatar = document.getElementsByClassName(avatarClass);
        const style = window.getComputedStyle(rootAvatar[0]);
        expect(style.order).toBe("2");
    });
});

