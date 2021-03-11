import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
  id: "primary-button",
  title: "Button",
  argTypes: {
    type: { type: "primary" },
    onClick: { action: "clicked" },
  },
} as Meta;
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "primary-button",
  type: "primary",
  children: "Primary Button",
};
// export const Primary = ()=>{ return (<Heading type="primary">Heading component</Heading>)};  #easier way but not responsive with realtime changes

export const Secondary = Template.bind({});
Secondary.args = {
  id: "primary-button",
  type: "secondary",
  children: "Secondary Button",
};
// export const Secondary = ()=>{ return  <Heading type="secondary">Heading component</Heading>};
export const Danger = Template.bind({});
Danger.args = {
  id: "primary-button",
  type: "danger",
  children: "Danger Button",
};
// export const Danger = ()=>{  return <Heading type="danger">Heading component</Heading>};
export const Warning = Template.bind({});
Warning.args = {
  id: "primary-button",
  type: "warning",
  children: "Warning button",
};
// export const Success = ()=>{ return  <Heading type="success">Heading component</Heading>};
export const Success = Template.bind({});
Success.args = {
  id: "primary-button",
  type: "success",
  children: "success button",
};
// export const Warning = ()=>{  return <Heading type="warning">Heading component</Heading>};

export const Big = Template.bind({});
Big.args = {
  id: "primary-button",
  type: "success",
  children: "Button",
  size: "big",
};
