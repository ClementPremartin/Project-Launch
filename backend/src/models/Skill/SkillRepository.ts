import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import Skill from "../Skill/SkillEntity";
import Wilder from "../Wilder/WilderEntity";

export default class SkillRepository extends Skill {
  private static repository: Repository<Skill>;

  static async initializeRepository(): Promise<void> {
    this.repository = await getRepository(Skill)
  }

  static async clearRepository(): Promise<void> {
    this.repository.clear();
  }

  static async initializeSkill(): Promise<void> {
      const wilderRepository = await getRepository(Wilder);
        await wilderRepository.clear();
        await this.clearRepository();
        await this.repository.save({
          skill_name: "JS",
          rate: 5
        });
        await this.repository.save({
          skill_name: "Java",
          rate: 1
        });
        await this.repository.save({
          skill_name: "PHP",
          rate: 3
        });
        await this.repository.save({
          skill_name: "Ruby",
          rate: 3
        });
        await this.repository.save({
          skill_name: "Postgres",
          rate: 3
        });
        await this.repository.save({
          skill_name: "React",
          rate: 5
        });
        await this.repository.save({
          skill_name: "SpringBoot",
          rate: 4
        });
    }


  static async getSkills() {
    return this.repository.find();
  }

  static async getSkillBySkillName(skillName: string) {
    return this.repository.findOneBy({skill_name: skillName});
  }

  static async getSkillById(id: any): Promise<Skill |null> {
    return this.repository.findOneBy({id})
  }
}
