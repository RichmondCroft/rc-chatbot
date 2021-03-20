import React from "react";
import { Meta, Story } from "@storybook/react";
import { ChatBox, ChatBoxProps } from "./ChatBox";
import { ChatBubble } from "../ChatBubble/ChatBubble";

import { dummyData } from "../dummyData";

export default {
  title: "Chat Box",
  component: ChatBox,
} as Meta;

const Template: Story<ChatBoxProps> = (args) => (
  <ChatBox {...args}>
    {dummyData.map((msg) => (
      <ChatBubble
        id={msg.id}
        displayName={msg.displayName}
        align={msg.align}
        messageId={msg.messageId}
      >
        {msg.message}
      </ChatBubble>
    ))}
  </ChatBox>
);

export const Primary = Template.bind({});
Primary.args = {};
