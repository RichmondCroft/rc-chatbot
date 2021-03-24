import React, { ReactNode } from "react";
import styled from "styled-components";
import { COLOR, FONT_SIZE, SPACE } from "../../styles";

interface Props {
    id: string;
    children: ReactNode;
    // onClick: (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onClick: () => void;

};

const ButtonStyles = styled.button`
 background-color:${COLOR.primary};
 font-size: ${FONT_SIZE.M};
 padding:${SPACE.XXS};
 border:0;
 margin:${SPACE.S};
`;

export const Button: React.FC<Props> = ({
    id,
    children,
    onClick,
}: Props) => <ButtonStyles id={id} onClick={onClick}>{children}</ButtonStyles>;
export default Button;