import styled from "styled-components";
import { MAIN_THEME_COLOR } from "../../styles/style-constants";

export const LoaderStyle = styled.span`

  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: ${MAIN_THEME_COLOR};
  border-radius: 50%;
  opacity: 85%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg)
    }
  }
`;