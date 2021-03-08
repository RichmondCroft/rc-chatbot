// import React from 'react'
import { Heading, HeadingProp } from "./Heading";
import { Meta, Story } from "@storybook/react";

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
const Template: Story<HeadingProp> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "First Story Component",
};
// export const Primary = ()=>{ return (<Heading type="primary">Heading component</Heading>)};  #easier way but not responsive with realtime changes

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "Type secondary in type to change color in background",
};
//export const Secondary = ()=>{ return  <Heading type="secondary">Heading component</Heading>};
export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
  children: "Danger Type",
};
//export const Danger = ()=>{  return <Heading type="danger">Heading component</Heading>};
export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  children: "Warning Type",
};
//export const Success = ()=>{ return  <Heading type="success">Heading component</Heading>};
export const Success = Template.bind({});
Success.args = {
  type: "success",
  children: "success component",
};
//export const Warning = ()=>{  return <Heading type="warning">Heading component</Heading>};

export const Big = Template.bind({});
Big.args = {
  type: "success",
  children: "big,medium,small are the sizes of font",
  size: "big",
};
