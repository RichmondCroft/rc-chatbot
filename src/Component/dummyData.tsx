import { Actor } from "../types";

export const BOT_QUESTIONS: Actor[] = [
  {
    messageId: 1,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "Hello, What is your name?",
    delay: 1000,
    input: {
      type: "text",
      name: "name",
    },
  },
  {
    messageId: 2,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "What are your hobbies?",
    delay: 1000,
    input: {
      type: "textarea",
      name: "hobbies",
    },
  },
  {
    messageId: 3,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "At what level are you in programming?",
    delay: 1500,
    input: {
      type: "radio",
      name: "programmingLevel",
      options: [
        { id: 1, value: "Beginner" },
        { id: 2, value: "Intermediate" },
        { id: 3, value: "Expert" },
      ],
    },
  },
  {
    messageId: 4,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "What is your specialization?",
    delay: 900,
    input: {
      type: "checkbox",
      name: "specialization",
      options: [
        { id: 1, value: "Frontend" },
        { id: 2, value: "Backend" },
        { id: 3, value: "Fullstack" },
      ],
    },
  },
  {
    messageId: 5,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "Thank you for answering the questions",
    delay: 1000,
    input: {
      type: "default",
      name: "textInput",
    },
  },
  {
    messageId: 6,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "Bye",
    delay: 300,
    input: {
      type: "default",
      name: "textInput",
    },
  },
];

const dummyData: Actor[] = [];

export default dummyData;
