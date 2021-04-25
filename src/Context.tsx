import { createContext } from "react";

import { GlobalContext, addToGlobalFunc } from "./types";

export interface ChatBotContextProps {
  global: GlobalContext | null;
  addToGlobal: addToGlobalFunc;
}

export const ChatBotContext = createContext<ChatBotContextProps>({
  global: null,
  addToGlobal: () => {},
});
