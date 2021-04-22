import styled from "styled-components";
import { SPACER, BORDER_RADIUS, BORDER } from "../../constants";

export const InputWrapper = styled.div`
  display: flex;
  gap: ${SPACER};
  justify-content: center;
`;

export const StyledTextInput = styled.input`
  flex: 1;
  padding: 0.5rem;
`;

export const StyledTextAreaInput = styled.textarea`
  flex: 1;
  padding: 0.5rem;
`;

export const EnterButton = styled.button`
  padding: calc(0.5 * ${SPACER}) calc(1.5 * ${SPACER});
  border: ${BORDER};
  border-radius: ${BORDER_RADIUS};
`;
