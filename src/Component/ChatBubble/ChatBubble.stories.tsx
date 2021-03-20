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

// export const White = Template.bind({});
// White.args = {
//   variant: "chat-white",
//   children: "White chat bubble",
//   sender: "other",
//   rounded: false,
// };

// export const Dark = Template.bind({});
// Dark.args = {
//   variant: "chat-dark",
//   children: "Dark chat bubble",
//   sender: "other",
//   rounded: true,
// };
