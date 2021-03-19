import React, { ReactNode } from "react";
import styled from "styled-components";
import { color, boxHW } from "../../styles";

export interface BoxProps {
  id: string;
  children: ReactNode;
  size: String;
};
export const BoxComp = styled("div") <BoxProps>`
background-color:${props => {
    if (props.id === "primary-box") {
      return color.primary;
    } if (props.id === "secondary-box") {
      return color.secondary;
    }
    if (props.id === "danger-box") {
      return color.danger;
    }
    if (props.id === "success-box") {
      return color.success;
    }
    if (props.id === "warning-box") {
      return color.warning;
    }
    return color.primary;

  }

  };
  height:${props => {
    if (props.size === "small") {
      return boxHW.height.small;
    } if (props.size === "medium") {
      return boxHW.height.medium;
    }
    if (props.size === "large") {
      return boxHW.height.large;
    }

    return boxHW.height.medium;

  }

  };
  width:${props => {
    if (props.size === "small") {
      return boxHW.width.small;
    } if (props.size === "medium") {
      return boxHW.width.medium;
    }
    if (props.size === "large") {
      return boxHW.width.large;
    }

    return boxHW.width.medium;

  }

  };
  color:white;
  border:2px solid black;
  text-align:center;
  border
`;

export const Box: React.FC<BoxProps> = ({
  id,
  children,
  size = "small",
}: BoxProps) => (

  <BoxComp size={size} id={id}>{children}</BoxComp>
);
