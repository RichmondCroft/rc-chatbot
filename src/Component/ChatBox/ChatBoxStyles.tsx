import styled from "styled-components";
import { COLOR, SPACER, BORDER } from "../../variables";

export const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * ${SPACER});
  margin: ${SPACER};
  gap: ${SPACER};
  background-color: ${COLOR.grey};
  border: ${BORDER};
`;

export const MessagesWrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0rem;
  }
`;
