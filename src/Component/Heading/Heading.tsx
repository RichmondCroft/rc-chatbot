import React, { ReactNode } from "react";
import styled from 'styled-components';

export interface HeadingProp {
  id: string;
  children: ReactNode;
  size: String;
}
export const HeadingComp = styled('div')<HeadingProp>`
background-color:${props=>
  props.id==="primary-heading"?'#00b4d8':
    props.id==="secondary-heading"?'#03045e':
    props.id==="danger-heading"?'#e63946':
    props.id==="success-heading"?'#52b788':
    props.id==="warning-heading"?'#ffb703':'#fff'
  };
  height:${props=>
    props.size==="small"?'3rem':
    props.size==="medium"?'4rem':
    props.size==="large"?'6rem':'3rem'
  };
  width:${props=>
    props.size==="small"?'40rem':
    props.size==="medium"?'50rem':
    props.size==="large"?'70rem':'4 0rem'
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
