import Skill from "../Skill/Skill";

import {
  Card,
  CardImg,
  CardSkillsList,
  CardSkillsTitle,
  CardTitle,
} from "./Wilder_styled";
import { Paragraph } from "../../styles/base_styles";

import Avatar from "../../assets/avatar.png";

const Wilder = ({ firstname, lastname, skills, description, rate }) => {
  return (
    <Card>
      <CardImg src={Avatar} alt={`${firstname} profile`} />
      <CardTitle>{`${firstname} ${lastname}`}</CardTitle>
      <Paragraph>{description}</Paragraph>
      <CardSkillsTitle>Wild Skills</CardSkillsTitle>
      <CardSkillsList>
        {skills.map((skill) => (
          <li key={skill.id}>
            <Skill skill={skill} />
          </li>
        ))}
      </CardSkillsList>
    </Card>
  );
};

export default Wilder;
