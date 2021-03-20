export interface actor {
  messageId: number;
  id: string;
  displayName: string;
  align: string;
  message: string;
}

export const dummyData: actor[] = [
  {
    messageId: 1,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "Hello",
  },
  {
    messageId: 2,
    id: "user",
    displayName: "John Doe",
    align: "right",
    message: "Hi",
  },
  {
    messageId: 3,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "Etiam a mi ullamcorper, cursus est messageId, convallis neque.",
  },
  {
    messageId: 4,
    id: "user",
    displayName: "John Doe",
    align: "right",
    message: "Proin in metus vitae diam cursus sollicitudin.",
  },
  {
    messageId: 3,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "Donec messageId quam eget justo laoreet ullamcorper a sed purus.",
  },
  {
    messageId: 4,
    id: "user",
    displayName: "John Doe",
    align: "right",
    message: "Praesent quis leo in leo pharetra eleifend.",
  },
  {
    messageId: 3,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message: "Nunc aliquam risus aliquam ultricies ultrices.",
  },
  {
    messageId: 4,
    id: "user",
    displayName: "John Doe",
    align: "right",
    message: "Nunc molestie mauris at justo iaculis varius.",
  },
  {
    messageId: 3,
    id: "chatbot",
    displayName: "Bot",
    align: "left",
    message:
      "Suspendisse eu purus maximus, laoreet tellus et, malesuada mauris.",
  },
  {
    messageId: 4,
    id: "user",
    displayName: "John Doe",
    align: "right",
    message: "Fusce pretium erat eget diam mattis, nec tempus felis laoreet.",
  },
];
