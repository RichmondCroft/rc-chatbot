import React from "react";
import { Meta, Story } from "@storybook/react";
import { Box, BoxProps } from "./Box";

export default {
  component: Box,
  id: "primary-box",
  title: "Box",
} as Meta;
const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Primary = Template.bind({});

Primary.args = {
   id:"primary-box",
   size:"small",
   children:"Primarybox"
};
export const Secondary = Template.bind({});

Secondary.args = {
   id:"secondary-box",
   size:"smal",
   children:"Secondarybox"
};
export const Danger = Template.bind({});

Danger.args = {
   id:"danger-box",
   size:"small",
   children:"Dangerbox"
};
export const Warning = Template.bind({});

Warning.args = {
   id:"warning-box",
   size:"small",
   children:"Warningbox"
};
export const Success = Template.bind({});

Success.args = {
   id:"success-box",
   size:"small",
   children:"Successbox"
};


