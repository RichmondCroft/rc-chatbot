import React from "react";
import { Meta, Story } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
  component: Heading,
  title: "Heading",
  argTypes: {
    type: { type: "primary" },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
        { name: "white", value: "#fff" },
      ],
    },
  },
} as Meta;
const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "First Story Component",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "Type secondary in type to change color in background",
};

export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
  children: "Danger Type",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  children: "Warning Type",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  children: "success component",
};

export const Big = Template.bind({});
Big.args = {
  type: "success",
  children: "big,medium,small are the sizes of font",
  size: "big",
};
