import { createContext } from "react";

import { GlobalContext } from "./types";

export interface ChatBotContextProps {
  global: GlobalContext | null;
  addToGlobal: (name?: string, value?: string | string[]) => void;
}

export const ChatBotContext = createContext<ChatBotContextProps>({
  global: null,
  addToGlobal: () => {},
});
