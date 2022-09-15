import { Votes } from "./Skill.styled";

const Skill = ( {skill, rate} ) => {
    return (
        <>
            {skill.skill_name}
            <Votes>{skill.rate}</Votes>
        </>
    );
};

export default Skill;