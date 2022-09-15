import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LinkStyled = styled.div`
  background-color: #d9d9d9;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  text-decoration: none;

  &:hover {
    opacity: 80%;
    transition: 0.2s ease-in;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

