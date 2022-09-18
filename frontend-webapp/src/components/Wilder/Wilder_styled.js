import styled, { css } from "styled-components";
import { baseTitleStyles, Paragraph } from "../../styles/base_styles";
import { FONT_COLOR, MAIN_THEME_COLOR } from "../../styles/style_constants";

export const Card = styled.article`
  width: 180px;
  padding: 20px;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const CardImg = styled.img`
  border-radius: 7px 7px 0 0;
  margin-bottom: 20px;
  max-width: 100%;
  height: auto;
`;

export const CardTitle = styled.h3`
  ${baseTitleStyles};
  color: ${MAIN_THEME_COLOR};
  font-size: 20px;
`;

export const CardSkillsTitle = styled.h4`
  color: ${MAIN_THEME_COLOR};
  font-size: 15px;
`;

const cardPropertiesStyled = css`
  color: ${FONT_COLOR};
  line-height: 1.5;
`;

export const CardParagraph = styled(Paragraph)`
  ${cardPropertiesStyled};
`;

export const CardSkillsList = styled.ul`
  ${cardPropertiesStyled};
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & li {
    margin: 4px 0;
    display: flex;
    justify-content: space-around;
    border: #f76c6c 1px solid;
    border-radius: 4px;
    padding: 2px;
  }
`;

