export interface Actor {
  messageId: number;
  id: string;
  displayName: string;
  align: string;
  message: string;
  delay?: number;
  input: InputObject;
}

export interface InputObject {
  type: string;
  name?: string;
  options?: Options[];
}

export interface Options {
  id: number;
  value: string;
}

export interface GlobalContext {}

export type sendMessageFunc = (message: string) => void;
