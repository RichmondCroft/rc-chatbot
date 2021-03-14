import React from "react";
import { Meta, Story } from "@storybook/react";
import { ChatBubble, ChatBubbleProps } from "./ChatBubble";

export default {
  title: "Chat Bubble",
  component: ChatBubble,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    children: { control: "text" },
    rounded: { control: "boolean" },
    sender: {
      control: {
        type: "select",
        options: ["me", "other"],
      },
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
} as Meta;

const Template: Story<ChatBubbleProps> = (args) => <ChatBubble {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "chat-primary",
  children: "Primary chat bubble",
  sender: "me",
  rounded: false,
};

export const White = Template.bind({});
White.args = {
  variant: "chat-white",
  children: "White chat bubble",
  sender: "other",
  rounded: false,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: "chat-dark",
  children: "Dark chat bubble",
  sender: "other",
  rounded: true,
};
