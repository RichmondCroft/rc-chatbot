import styled from "styled-components";
import { COLOR, SPACER, BORDER } from "../../constants";
import { M } from "../../types";

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

export const MessageArea = styled.div<M>`
  display: flex;
  justify-content: ${(props) =>
    props.align === "left" ? "flex-start" : "flex-end"};
`;

export const ErrorWrapper = styled.div`
  color: red;
  border: 1px solid red;
  padding: 1rem;
`;
