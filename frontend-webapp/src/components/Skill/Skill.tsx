import { Votes } from "./Skill_styled";

type propType = {
  skill_name: string,
  rate: number,
}

const Skill = ({ skill_name, rate }: propType) => {
  return (
    <>
      {skill_name}
      <Votes>{rate}</Votes>
    </>
  );
};

export default Skill;
