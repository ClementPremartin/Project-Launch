import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import SkillRepository from "../Skill/SkillRepository";
import SchoolRepository from "../School/SchoolRepository";
import Wilder from "./WilderEntity";
import Skill from "../Skill/SkillEntity";
import School from "../School/SchoolEntity";


export default class WilderRepository extends Wilder {

  private static repository: Repository<Wilder>;

  static async initializeRepository(): Promise<void> {
    this.repository = await getRepository(Wilder);
  }

  static async clearRepository(): Promise<void> {
    this.repository.clear();
  }

  static async initializeWilder(): Promise<void> {
      await this.clearRepository();
      const lyonSchool = await SchoolRepository.getSchoolByCity("Lyon") as School;
      const brestSchool = await SchoolRepository.getSchoolByCity("Brest") as School;
      const phpSkill = await SkillRepository.getSkillBySkillName("PHP") as Skill;
      const javaSkill = await SkillRepository.getSkillBySkillName("Java") as Skill;
      const jsSkill = await SkillRepository.getSkillBySkillName("JS") as Skill;
      const philippe =  new Wilder(
            "Philippe",
            "LeBrigant",
            lyonSchool,
            "Je suis passionné de maquette en allumette et j'apprécie particulièrement lire des mangas.",
            [phpSkill, javaSkill]
        );

      const jeanjean = new Wilder(
          "Jeanjean",
          "Bon",
          brestSchool,
          "Je suis dev spécialisé dans le html. J'aime compter les étoiles. Je me nourris exclusivement de carotte.",
          [jsSkill, javaSkill, phpSkill]
      );

      await this.repository.save([philippe, jeanjean]);
  }


  static async getWilders(): Promise<Wilder[]> {
      return this.repository.find()
    }


  static async getWilderById(userId: string): Promise<Wilder | null> {
    const finalWilder = this.repository.findOne({
      where: {
        id: userId
      },
    });
    return finalWilder;
  }


  static async createWilder(firstname: string, lastname: string, description: string, schoolId: string): Promise<Wilder> {
    const school = await SchoolRepository.getSchoolById(schoolId);
    if(!school){
      throw new Error
    }
    const newWilder = new Wilder(firstname, lastname, school, description);
    await this.repository.save(newWilder);

    return newWilder;
  }


  static async putWilder(id: string, firstname: string, lastname: string, description: string): Promise<{
    id: string;
    firstname: string;
    lastname: string;
    description: string;
} & Wilder> {
    const wilderModifications = await this.repository.findOneBy({id});
    if(!wilderModifications) {
      throw Error("No existing Wilder")
    };
    return this.repository.save({
      id,
      firstname,
      lastname,
      description
    });
  }


  static async deleteWilder(id: string): Promise<Wilder> {
    const existingWilder = await this.repository.findOneBy({id});
    if(!existingWilder){
      throw Error("No existing Wilder matching ID");
    }
    return this.repository.remove(existingWilder);
  }


  static async addSkillsToWilder(userId: string, skillId: string): Promise<Wilder> {

    const wilder = await this.repository.findOneBy({id: userId});
    if(!wilder) {
      throw Error("No existing Wilder matching id");
    }
    const skill = await SkillRepository.getSkillById({id: skillId});
    if(!skill) {
      throw Error("No existing Skill mathing id");
    }
    wilder.skills = [...wilder.skills, skill];
    return this.repository.save(wilder);
  }


}
