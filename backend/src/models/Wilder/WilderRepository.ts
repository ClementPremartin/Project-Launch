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
            [phpSkill, javaSkill],
            "Je suis passionné de maquette en allumette et j'apprécie particulièrement lire des mangas.",
        );

      const jeanjean = new Wilder(
          "Jeanjean",
          "Bon",
          brestSchool,
          [jsSkill, javaSkill, phpSkill],
          "Je suis dev spécialisé dans le html. J'aime compter les étoiles. Je me nourris exclusivement de carotte.",
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


  static async createWilder(firstname: string, lastname: string, schoolId: any, skills: any, description: string,): Promise<Wilder> {
    //get get wilder school by Id
    const school = await SchoolRepository.getSchoolById(schoolId.value);
    if(!school){
      throw new Error;
    }

  //add wilder skills in skillArr arr by using getSkillById method
    const skillArr: Skill[] = [];
    console.log(skills);

    await Promise.all(skills.map(async(skill: any) =>
      {
        if(!skill){
          throw new Error
        }
        const result = await SkillRepository.getSkillById(skill.value);
        if(!result){
          throw new Error
        }
        skillArr.push(result);
      }));


    //instantiate the new wilder
    const newWilder = new Wilder(firstname, lastname, school, skillArr, description);

    newWilder.skills = skillArr;

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
