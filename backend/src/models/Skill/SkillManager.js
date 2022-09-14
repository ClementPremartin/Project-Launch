const {getRepository} = require("../../database/utils");
const Skill = require("../Skill/SkillEntity");
const Wilder = require("../Wilder/WilderEntity");

async function initializeSkill() {
    const skillRepository = await getRepository(Skill);
    const wilderRepository = await getRepository(Wilder);
      await wilderRepository.clear();
      await skillRepository.clear();
      await skillRepository.save({
        skill_name: "JS",
      });
      await skillRepository.save({
        skill_name: "Java",
      });
      await skillRepository.save({
        skill_name: "PHP",
      });
  }

async function getSkillBySkillName(skillName) {
  const skillRepository = await getRepository(Skill);
  return skillRepository.findOneBy({skill_name: skillName});
}

  module.exports = {
    initializeSkill,
    getSkillBySkillName,
  }