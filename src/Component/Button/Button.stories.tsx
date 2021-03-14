import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
  id: "primary-button",
  title: "Button",
} as Meta;
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "primary-button",
  children: "Primary Button",
  size: "small",
};
// export const Primary = ()=>{ return (<Heading type="primary">Heading component</Heading>)};  #easier way but not responsive with realtime changes

export const Secondary = Template.bind({});
Secondary.args = {
  id: "secondary-button",
  children: "Secondary Button",
  size: "medium",
};
// export const Secondary = ()=>{ return  <Heading type="secondary">Heading component</Heading>};
export const Danger = Template.bind({});
Danger.args = {
  id: "danger-button",
  children: "Danger Button",
  size: "small",
};
// export const Danger = ()=>{  return <Heading type="danger">Heading component</Heading>};
export const Warning = Template.bind({});
Warning.args = {
  id: "warning-button",
  children: "Warning button",
  size: "medium",
};
// export const Success = ()=>{ return  <Heading type="success">Heading component</Heading>};
export const Success = Template.bind({});
Success.args = {
  id: "success-button",
  children: "success button",
  size: "large",
};
// export const Warning = ()=>{  return <Heading type="warning">Heading component</Heading>};

export const Large = Template.bind({});
Large.args = {
  id: "primary-button",
  children: "Button",
  size: "large",
};
