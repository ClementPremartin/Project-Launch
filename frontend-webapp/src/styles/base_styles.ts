import { APP_FUNCTIONNAL_WIDTH } from "./style_constants";
import styled, { css } from "styled-components";

export const baseTitleStyles = css`
  margin: 0 0 0.35em;
`;

export const baseContainerStyles = css`
  max-width: ${APP_FUNCTIONNAL_WIDTH};
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`;

export const Paragraph = styled.p`
  margin: 0 0 1.15em;
`;

