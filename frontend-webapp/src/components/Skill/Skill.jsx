import { Votes } from "./Skill_styled";

const Skill = ({ skill, rate }) => {
  return (
    <>
      {skill.skill_name}
      <Votes>{skill.rate}</Votes>
    </>
  );
};

export default Skill;
