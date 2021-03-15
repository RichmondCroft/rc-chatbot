import React, { ReactNode } from "react";
import styled from 'styled-components';
import {color,Heading_h_w} from '../../styles';
export interface HeadingProp {
  id: string;
  children: ReactNode;
  size: String;
}
export const HeadingComp = styled('div')<HeadingProp>`
background-color:${props=>
  props.id==="primary-heading"?color.primary:
    props.id==="secondary-heading"?color.secondary:
    props.id==="danger-heading"?color.danger:
    props.id==="success-heading"?color.success:
    props.id==="warning-heading"?color.warning:color.primary
  };
  height:${props=>
    props.size==="small"?Heading_h_w.height.small:
    props.size==="medium"?Heading_h_w.height.medium:
    props.size==="large"?Heading_h_w.height.large:Heading_h_w.height.small
  };
  width:${props=>
    props.size==="small"?Heading_h_w.width.small:
    props.size==="medium"?Heading_h_w.width.medium:
    props.size==="large"?Heading_h_w.width.large:Heading_h_w.width.small
  };
  font-size: 3rem;
  color: black;
  text-align: center;
  padding: 0.5rem;
`
export const Heading: React.FC<HeadingProp> = ({
  children,
  id = "primary-heading",
  size = "medium",
}: HeadingProp) => <HeadingComp id={id} size={size}>{children}</HeadingComp>;
