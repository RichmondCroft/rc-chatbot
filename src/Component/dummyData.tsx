import { Actor } from "../types";
import BotImg from "../Assets/Bot.png";
import UserImg from "../Assets/User.png";

const dummyData: Actor[] = [
  {
    messageId: 1,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "Hello",
    imgsrc:BotImg
  },
  {
    messageId: 2,
    id: "user",
    displayName: "John Doe",
    align: "right",
    message: "Hi",
    imgsrc:UserImg
  },
  {
    messageId: 3,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "Etiam a mi ullamcorper, cursus est messageId, convallis neque.",
    imgsrc:BotImg
  },
  {
    messageId: 4,
    id: "user",
    displayName: "John Doe",
    align: "right",
    message: "Proin in metus vitae diam cursus sollicitudin.",
    imgsrc:UserImg
  },
  {
    messageId: 3,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "Donec messageId quam eget justo laoreet ullamcorper a sed purus.",
    imgsrc:BotImg
  },
  {
    messageId: 4,
    id: "user",
    displayName: "John Doe",
    align: "right",
    message: "Praesent quis leo in leo pharetra eleifend.",
    imgsrc:UserImg
  },
  {
    messageId: 3,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "Nunc aliquam risus aliquam ultricies ultrices.",
    imgsrc:BotImg
  },
  {
    messageId: 4,
    id: "user",
    displayName: "John Doe",
    align: "right",
    message: "Nunc molestie mauris at justo iaculis varius.",
    imgsrc:UserImg
  },
  {
    messageId: 3,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message:
      "Suspendisse eu purus maximus, laoreet tellus et, malesuada mauris.",
      imgsrc:BotImg
  },
  {
    messageId: 4,
    id: "user",
    displayName: "John Doe",
    align: "right",
    message: "Fusce pretium erat eget diam mattis, nec tempus felis laoreet.",
    imgsrc:UserImg
  },
];

export default dummyData;
