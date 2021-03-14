import React, { ReactNode } from "react";
import styled from 'styled-components';


export interface BoxProps {
  id: string;
  children: ReactNode;
  size: String;
};
export const BoxComp = styled('div')<BoxProps>`
  background-color:${props=>
    props.id==="primary-box"?'#00b4d8':
    props.id==="secondary-box"?'#03045e':
    props.id==="danger-box"?'#e63946':
    props.id==="success-box"?'#52b788':
    props.id==="warning-box"?'#ffb703':'#fff'
  };
  height:${props=>
    props.size==="small"?'10rem':
    props.size==="medium"?'30rem':
    props.size==="large"?'50rem':'10rem'
  };
  width:${props=>
    props.size==="small"?'10rem':
    props.size==="medium"?'30rem':
    props.size==="large"?'50rem':'10rem'
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
