import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    type: { type: "primary" },
    onClick: { action: "clicked" },
  },
} as Meta;
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "Primary Button",
};
// export const Primary = ()=>{ return (<Heading type="primary">Heading component</Heading>)};  #easier way but not responsive with realtime changes

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "Secondary Button",
};
// export const Secondary = ()=>{ return  <Heading type="secondary">Heading component</Heading>};
export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
  children: "Danger Button",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  children: "Warning button",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  children: "success button",
};

export const Big = Template.bind({});
Big.args = {
  type: "success",
  children: "Button",
  size: "big",
};
