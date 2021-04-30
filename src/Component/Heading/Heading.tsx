import React, { ReactNode } from "react";
import styled from "styled-components";
import { COLOR, headingHW, TextColor, SPACE, FONT_SIZE } from "../../styles";

export interface HeadingProp {
  id: string;
  children: ReactNode;
  size: String;
}
export const HeadingComp = styled("div") <HeadingProp>`
background-color:${props => {
    switch(props.id){
        case "primary-heading":
          return COLOR.primary;
        case "secondary-heading":
          return COLOR.secondary;
        case "danger-heading":
          return COLOR.danger;
        case "success-heading":
          return COLOR.success;
        case "warning-heading":
          return COLOR.warning;
        default:
          return COLOR.primary;          
    }
   

  }

  };
  height:${props => {
    if (props.size === "small") {
      return headingHW.height.small;
    } if (props.size === "medium") {
      return headingHW.height.medium;
    }
    if (props.size === "large") {
      return headingHW.height.large;
    }

    return headingHW.height.medium;

  }

  };
  width:${props => {
    if (props.size === "small") {
      return headingHW.width.small;
    } if (props.size === "medium") {
      return headingHW.width.medium;
    }
    if (props.size === "large") {
      return headingHW.width.large;
    }

    return headingHW.width.medium;

  }

  };
  font-size: ${FONT_SIZE.XL};
  color: ${TextColor.secondary};
  text-align: center;
  padding: ${SPACE.XS};
`;

export const Heading: React.FC<HeadingProp> = ({
  children,
  id = "primary-heading",
  size = "medium",
}: HeadingProp) => <HeadingComp id={id} size={size} data-testid="Heading">{children}</HeadingComp>;
