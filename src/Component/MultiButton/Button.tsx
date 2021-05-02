import React, { ReactNode } from "react";
import styled from "styled-components";
import { COLOR, FONT_SIZE, SPACE } from "../../styles";

export interface Props {
    children: ReactNode;
    onClick: () => void;
    id: string;
};

const ButtonStyles = styled.button`
 background-color:${COLOR.primary};
 font-size: ${FONT_SIZE.M};
 padding:${SPACE.XXS};
 border:0;
 margin:${SPACE.S};
`;

export const Button: React.FC<Props> = ({ id, children, onClick = () => {} } : Props) =>(
<ButtonStyles id={id} onClick={onClick} data-testid="MultiButton">{children}</ButtonStyles>) ;

export default Button;