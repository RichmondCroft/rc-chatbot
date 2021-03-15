import React, { ReactNode } from "react";
import styled from 'styled-components';
import {color,Button_h_w} from '../../styles';
export interface ButtonProps {
  id: string;
  children: ReactNode;
  size: String;
  // onclick: () => void;
}
export const ButtonComp = styled('button')<ButtonProps>`
 background-color:${props=>
  props.id==="primary-button"?color.primary:
    props.id==="secondary-button"?color.secondary:
    props.id==="danger-button"?color.danger:
    props.id==="success-button"?color.success:
    props.id==="warning-button"?color.warning:color.primary
  };
  height:${props=>
    props.size==="small"?Button_h_w.height.small:
    props.size==="medium"?Button_h_w.height.medium:
    props.size==="large"?Button_h_w.height.large: Button_h_w.height.small
  };
  width:${props=>
    props.size==="small"?Button_h_w.width.small:
    props.size==="medium"?Button_h_w.width.medium:
    props.size==="large"?Button_h_w.width.large:Button_h_w.width.small
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
