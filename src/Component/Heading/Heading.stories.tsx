import React from "react";
import { Meta, Story } from "@storybook/react";
import { Heading, HeadingProp } from "./Heading";

export default {
  component: Heading,
  title: "Heading",
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
  id: "primary-heading",
  children: "First Story Component",
  size:"medium"
};
// export const Primary = ()=>{ return (<Heading type="primary">Heading component</Heading>)};  #easier way but not responsive with realtime changes

export const Secondary = Template.bind({});
Secondary.args = {
  id: "secondary-heading",
  children: "Type secondary in type to change color in background",
  size: "medium",
};
// export const Secondary = ()=>{ return  <Heading type="secondary">Heading component</Heading>};
export const Danger = Template.bind({});
Danger.args = {
  id: "danger-heading",
  children: "Danger Type",
  size: "medium",
};
// export const Danger = ()=>{  return <Heading type="danger">Heading component</Heading>};
export const Warning = Template.bind({});
Warning.args = {
  id: "warning-heading",
  children: "Warning Type",
  size: "small",
};
// export const Success = ()=>{ return  <Heading type="success">Heading component</Heading>};
export const Success = Template.bind({});
Success.args = {
  id: "success-heading",
  children: "success component",
  size: "medium",
};
// export const Warning = ()=>{  return <Heading type="warning">Heading component</Heading>};

export const Big = Template.bind({});
Big.args = {
  id: "success-heading",
  children: "big,medium,small are the sizes of font",
  size: "big",
};
