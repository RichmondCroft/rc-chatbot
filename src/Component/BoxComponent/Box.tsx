import React, { ReactNode } from "react";
import styled from 'styled-components';
import {color,Box_h_w} from '../../styles';

export interface BoxProps {
  id: string;
  children: ReactNode;
  size: String;
};
export const BoxComp = styled('div')<BoxProps>`
background-color:${props=>
  props.id==="primary-box"?color.primary:
    props.id==="secondary-box"?color.secondary:
    props.id==="danger-box"?color.danger:
    props.id==="success-box"?color.success:
    props.id==="warning-box"?color.warning:color.primary
  };
  height:${props=>
    props.size==="small"?Box_h_w.height.small:
    props.size==="medium"?Box_h_w.height.medium:
    props.size==="large"?Box_h_w.height.large:Box_h_w.height.small
  };
  width:${props=>
    props.size==="small"?Box_h_w.width.small:
    props.size==="medium"?Box_h_w.width.medium:
    props.size==="large"?Box_h_w.width.large:Box_h_w.width.small
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

  <BoxComp size={size}  id ={id}>{children}</BoxComp>
);
