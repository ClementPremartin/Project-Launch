import styled from "styled-components";
import { MAIN_THEME_COLOR } from "./styles/style_constants";
import { baseContainerStyles, baseTitleStyles } from "./styles/base_styles";

export const Container = styled.div`
  ${baseContainerStyles}
`;

export const MainContainer = styled.main`
  ${baseContainerStyles}
`;

export const Header = styled.header`
  background-color: ${MAIN_THEME_COLOR};
  color: #fff;
`;

export const Footer = styled.footer`
  border-top: 2px solid ${MAIN_THEME_COLOR};
`;

export const PageTitle = styled.h1`
  ${baseTitleStyles}
  font-size: 40px;
`;
