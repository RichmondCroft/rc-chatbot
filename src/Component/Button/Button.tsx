import React, { ReactNode } from "react";
import styled from "styled-components";
import { color, buttonHW } from "../../styles";

export interface ButtonProps {
  id: string;
  children: ReactNode;
  size: String;
  // onclick: () => void;
};
export const ButtonComp = styled("button") <ButtonProps>`
 background-color:${props => {
    if (props.id === "primary-button") {
      return color.primary;
    } if (props.id === "secondary-button") {
      return color.secondary;
    }
    if (props.id === "danger-button") {
      return color.danger;
    }
    if (props.id === "success-button") {
      return color.success;
    }
    if (props.id === "warning-button") {
      return color.warning;
    }
    return color.primary;

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
  font-size: 1rem;
  color: white;
  text-align: center;
  padding: 0.2rem;
  border: 0;
  border-radius: 0.5rem;
`;
// const handleClick = () => {
//   console.log("button Clicked");
// };

export const Button: React.FC<ButtonProps> = ({
  id = "primary-button",
  children = "button",
  size = "medium",
  // onclick,
}: ButtonProps) => (
  <ButtonComp id={id} size={size}>{children}</ButtonComp>
);
