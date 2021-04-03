import styled from "styled-components";
import { SPACER, BORDER_RADIUS, BORDER } from "../../variables";

export const InputWrapper = styled.div`
  display: flex;
  gap: ${SPACER};
  justify-content: center;
`;

export const EnterButton = styled.button`
  padding: calc(0.5 * ${SPACER}) calc(1.5 * ${SPACER});
  border: ${BORDER};
  border-radius: ${BORDER_RADIUS};
`;
