import React, { ReactNode } from "react";
import styled from "styled-components";
import { COLOR, buttonHW, TextColor, SPACE, FONT_SIZE } from "../../styles";

export interface ButtonProps {
  id: string;
  children: ReactNode;
  size: string;
};
export const ButtonComp = styled("button") <ButtonProps>`
 background-color:${props => {
  switch(props.id){
    case "primary-button":
      return COLOR.primary;
    case "secondary-button":
      return COLOR.secondary;
    case "danger-button":
      return COLOR.danger;
    case "success-button":
      return COLOR.success;
    case "warning-button":
      return COLOR.warning;
    default:
      return COLOR.primary;          

}

  }
  };
  height:${props => {
    if (props.size === "small") {
      return buttonHW.height.small;
    } if (props.size === "medium") {
      return buttonHW.height.medium;
    }
    if (props.size === "large") {
      return buttonHW.height.large;
    }

    return buttonHW.height.medium;

  }};
  width:${props => {
    if (props.size === "small") {
      return buttonHW.width.small;
    } if (props.size === "medium") {
      return buttonHW.width.medium;
    }
    if (props.size === "large") {
      return buttonHW.width.large;
    }

    return buttonHW.width.medium;

  }
  };
  font-size: ${FONT_SIZE.M};
  color: ${TextColor.primary};
  text-align: center;
  padding: ${SPACE.XXS};
  border: 0;
  border-radius: ${SPACE.XS};
`;


export const Button: React.FC<ButtonProps> = ({
  id = "primary-button",
  children = "button",
  size = "medium",
}: ButtonProps) => <ButtonComp id={id} size={size} data-testid="ButtonComponent">{children}</ButtonComp>;


export default Button;
