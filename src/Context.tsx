import { createContext } from "react";

export interface ChatBotContextProps {
  global: any;
  addToGlobal: any;
}

export const ChatBotContext = createContext<ChatBotContextProps>({
  global: null,
  addToGlobal: () => {},
});
