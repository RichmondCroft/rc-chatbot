import React, { ReactNode } from "react";
import styled from "styled-components";
import { COLOR, boxHW, TextColor } from "../../styles";

export interface BoxProps {
  id: string;
  children: ReactNode;
  size: string;
};
export const BoxComp = styled("div") <BoxProps>`
background-color:${props => {
  switch(props.id){
    case "primary-box":
      return COLOR.primary;
    case "secondary-box":
      return COLOR.secondary;
    case "danger-box":
      return COLOR.danger;
    case "success-box":
      return COLOR.success;
    case "warning-box":
      return COLOR.warning;
    default:
      return COLOR.primary;    
    }
  }};
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
  color:${TextColor.primary};
  border:2px solid ${TextColor.secondary};
  text-align:center;
`;

export const Box: React.FC<BoxProps> = (props: BoxProps) => {
  const {size,id,children} = props;
  return (<BoxComp size={size} id={id} data-testid="BoxComponent">{children}</BoxComp>);
};

export default Box;
