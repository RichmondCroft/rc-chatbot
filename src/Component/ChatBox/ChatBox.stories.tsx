import React from "react";
import { Meta, Story } from "@storybook/react";
import { ChatBox } from "./ChatBox";

export default {
  title: "Chat Box",
  component: ChatBox,
} as Meta;

const Template: Story = () => <ChatBox></ChatBox>;

export const Primary = Template.bind({});
Primary.args = {};
