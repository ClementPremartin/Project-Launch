import styled from "styled-components";
import {
  FONT_COLOR,
  MAIN_THEME_COLOR,
  SECOND_THEME_COLOR,
} from "../../styles/style_constants";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  height: 480px;
  width: 50%;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const CardLabel = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  color: ${FONT_COLOR};
  width: 100%;
  margin: auto;
`;

export const CardTitle = styled.h1`
  color: ${MAIN_THEME_COLOR};
`;

export const Button = styled.input`
  background-color: ${MAIN_THEME_COLOR};
  border-radius: 20px;
  border: none;
  padding: 15px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  margin: 10px;
`;

export const InputForm = styled.input`
  border-radius: 8px;
  border: none;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: ${SECOND_THEME_COLOR};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const SelectForm = styled.select`
  border-radius: 8px;
  border: none;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: ${SECOND_THEME_COLOR};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

