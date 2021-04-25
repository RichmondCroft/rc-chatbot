import React from "react";
import { Meta, Story } from "@storybook/react";
import { ChatBubble, ChatBubbleProps } from "./ChatBubble";

export default {
  title: "Chat Bubble",
  component: ChatBubble,
} as Meta;

const Template: Story<ChatBubbleProps> = (args) => <ChatBubble {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary chat bubble",
};