import Skill from "../Skill/Skill";

import { WilderType } from "../../types";

import {
  Card,
  CardImg,
  CardSkillsList,
  CardSkillsTitle,
  CardTitle,
  CityStyle,
  CityContainer,
} from "./Wilder_styled";
import { Paragraph } from "../../styles/base_styles";

const Avatar = require("../../assets/avatar.png");

type propType = Omit<WilderType, "id">


const Wilder = ({ firstname, lastname, skills, description, school }: propType) => {
  return (
    <Card>
      <CityContainer>
        <CityStyle>{`Campus: ${school.city_name}`}</CityStyle>
      </CityContainer>
      <CardImg src={Avatar} alt={`${firstname} profile`} />
      <CardTitle>{`${firstname} ${lastname}`}</CardTitle>
      <Paragraph>{description}</Paragraph>
      <CardSkillsTitle>Wild Skills</CardSkillsTitle>
      <CardSkillsList>
        {skills.map((skill) => (
          <li key={skill.id}>
            <Skill skill_name={skill.skill_name} rate={skill.rate} />
          </li>
        ))}
      </CardSkillsList>
    </Card>
  );
};

export default Wilder;

