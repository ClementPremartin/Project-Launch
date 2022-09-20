import { getRepository } from "../../database/utils";
import Skill from "../Skill/SkillEntity";
import Wilder from "../Wilder/WilderEntity";

async function initializeSkill(): Promise<void> {
    const skillRepository = await getRepository(Skill);
    const wilderRepository = await getRepository(Wilder);
      await wilderRepository.clear();
      await skillRepository.clear();
      await skillRepository.save({
        skill_name: "JS",
        rate: 5
      });
      await skillRepository.save({
        skill_name: "Java",
        rate: 1
      });
      await skillRepository.save({
        skill_name: "PHP",
        rate: 3
      });
  }

async function getSkillBySkillName(skillName: string) {
  const skillRepository = await getRepository(Skill);
  return skillRepository.findOneBy({skill_name: skillName});
}

  export {
    initializeSkill,
    getSkillBySkillName,
  }