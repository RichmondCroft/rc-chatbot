import React, { ReactNode } from "react";
import styled from 'styled-components';

export interface ButtonProps {
  id: string;
  children: ReactNode;
  size: String;
  // onclick: () => void;
}
export const ButtonComp = styled('button')<ButtonProps>`
 background-color:${props=>
  props.id==="primary-button"?'#00b4d8':
    props.id==="secondary-button"?'#03045e':
    props.id==="danger-button"?'#e63946':
    props.id==="success-button"?'#52b788':
    props.id==="warning-button"?'#ffb703':'#fff'
  };
  height:${props=>
    props.size==="small"?'2rem':
    props.size==="medium"?'3rem':
    props.size==="large"?'5rem':'2rem'
  };
  width:${props=>
    props.size==="small"?'10rem':
    props.size==="medium"?'15rem':
    props.size==="large"?'20rem':'10rem'
  };
  font-size: 1rem;
  color: white;
  text-align: center;
  padding: 0.2rem;
  border: 0;
  border-radius: 0.5rem;
`;

export const Button: React.FC<ButtonProps> = ({
  id="primary-button",
  children="button",
  size = "medium",
  // onclick,
}: ButtonProps) => (
  <ButtonComp id={id} size={size}>{children} </ButtonComp>
);
