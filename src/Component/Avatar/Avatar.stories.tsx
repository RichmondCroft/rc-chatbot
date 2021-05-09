import React from "react";
import {Meta,Story} from "@storybook/react";
import {Avatar,ImgProps} from "./Avatar";
import BotImg from "../../Assets/Bot.png";
import UserImg from "../../Assets/User.png";

export default {
    component:Avatar,
    title:"UserIcon",
} as Meta;

const Template : Story<ImgProps> = (args) =><Avatar {...args}/>;

export const BotAvatar = Template.bind({});
BotAvatar.args = {
  imgSrc: BotImg,
  align: "left",
};
export const UserAvatar = Template.bind({});
UserAvatar.args = {
  imgSrc: UserImg,
  align: "left",
};