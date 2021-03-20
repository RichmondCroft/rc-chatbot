import React from "react";
import { Meta, Story } from "@storybook/react";
import { ChatBox, ChatBoxProps } from "./ChatBox";
import { ChatBubble } from "../ChatBubble/ChatBubble";

export default {
  title: "Chat Box",
  component: ChatBox,
} as Meta;

const dummyData = [
  { id: 1, from: "me", message: "Hello" },
  { id: 2, from: "other", message: "Hi" },
  {
    id: 3,
    from: "me",
    message: "Etiam a mi ullamcorper, cursus est id, convallis neque.",
  },
  {
    id: 4,
    from: "other",
    message: "Proin in metus vitae diam cursus sollicitudin.",
  },
  {
    id: 3,
    from: "me",
    message: "Donec id quam eget justo laoreet ullamcorper a sed purus.",
  },
  {
    id: 4,
    from: "other",
    message: "Praesent quis leo in leo pharetra eleifend.",
  },
  {
    id: 3,
    from: "me",
    message: "Nunc aliquam risus aliquam ultricies ultrices.",
  },
  {
    id: 4,
    from: "other",
    message: "Nunc molestie mauris at justo iaculis varius.",
  },
  {
    id: 3,
    from: "me",
    message:
      "Suspendisse eu purus maximus, laoreet tellus et, malesuada mauris.",
  },
  {
    id: 4,
    from: "other",
    message: "Fusce pretium erat eget diam mattis, nec tempus felis laoreet.",
  },
];

const Template: Story<ChatBoxProps> = (args) => (
  <ChatBox {...args}>
    {dummyData.map((msg) => (
      <ChatBubble>{msg.message}</ChatBubble>
    ))}
  </ChatBox>
);

export const Primary = Template.bind({});
Primary.args = {};
