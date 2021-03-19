import React, { ReactNode } from "react";
import styled from "styled-components";
import { color, headingHW } from "../../styles";

export interface HeadingProp {
  id: string;
  children: ReactNode;
  size: String;
}
export const HeadingComp = styled("div") <HeadingProp>`
background-color:${props => {
    if (props.id === "primary-heading") {
      return color.primary;
    } if (props.id === "secondary-heading") {
      return color.secondary;
    }
    if (props.id === "danger-heading") {
      return color.danger;
    }
    if (props.id === "success-heading") {
      return color.success;
    }
    if (props.id === "warning-heading") {
      return color.warning;
    }
    return color.primary;

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
  font-size: 3rem;
  color: black;
  text-align: center;
  padding: 0.5rem;
`;

export const Heading: React.FC<HeadingProp> = ({
  children,
  id = "primary-heading",
  size = "medium",
}: HeadingProp) => <HeadingComp id={id} size={size}>{children}</HeadingComp>;
