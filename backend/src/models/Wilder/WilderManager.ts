import { getRepository } from "../../database/utils";
import { getSchoolByCity } from "../School/SchoolManager";
import { getSkillBySkillName } from "../Skill/SkillManager";
import Wilder from "../Wilder/WilderEntity";
import Skill from "../Skill/SkillEntity";

async function initializeWilder(): Promise<void> {
  const wilderRepository = await getRepository(Wilder);
    await wilderRepository.clear();
    const lyonSchool = await getSchoolByCity("Lyon");
    const brestSchool = await getSchoolByCity("Brest");
    const phpSkill = await getSkillBySkillName("PHP");
    const javaSkill = await getSkillBySkillName("Java");
    const jsSkill = await getSkillBySkillName("JS");
    await wilderRepository.save(
        {
          firstname: "Philippe",
          lastname: "LeBrigant",
          school: lyonSchool,
          description: "Je suis passionné de maquette en allumette et j'apprécie particulièrement lire des mangas.",
          skills: [phpSkill, javaSkill]
        }
      );
      await wilderRepository.save(
        {
          firstname: "Jeanjean",
          lastname: "Bon",
          description: "Je suis dev spécialisé dans le html. J'aime compter les étoiles. Je me nourris exclusivement de carotte.",
          school: brestSchool,
          skills: [jsSkill, javaSkill, phpSkill]
        }
      );
}

async function getWilders() {
    const wilderRepository = await getRepository(Wilder);
    return wilderRepository.find();
  }

  async function getWilderById(userId: string) {
    const wilderRepository = await getRepository(Wilder);
    const finalWilder = wilderRepository.findOne({
      where: {
        id: userId
      },
    });
    console.log(finalWilder);
    return finalWilder;
  }

  async function createWilder(firstname: string, lastname: string, description: string, city_name: string) {
    const wilderRepository = await getRepository(Wilder);
    const school = await getSchoolByCity(city_name);

    const newWilder = wilderRepository.create({firstname, lastname, description, school});
    await wilderRepository.save(newWilder);
    return newWilder;
  }

  async function putWilder(id: string, firstname: string, lastname: string, description: string) {
    const wilderRepository = await getRepository(Wilder);
    const wilderModifications = await wilderRepository.findOneBy({id});
    if(!wilderModifications) {
      throw Error("No existing Wilder")
    };
    return wilderRepository.save({
      id,
      firstname,
      lastname,
      description
    });
  }

  async function deleteWilder(id: string) {
    const wilderRepository = await getRepository(Wilder);
    const existingWilder = await wilderRepository.findOneBy({id});
    if(!existingWilder){
      throw Error("No existing Wilder matching ID");
    }
    return wilderRepository.remove(existingWilder);
  }


  async function addSkillsToWilder(userId: string, skillId: string) {
    const wilderRepository = await getRepository(Wilder);
    const skillRepository = await getRepository(Skill);

    const wilder = await wilderRepository.findOneBy({id: userId});
    if(!wilder) {
      throw Error("No existing Wilder matching id");
    }
    const skill = await skillRepository.findOneBy({id: skillId});
    if(!skill) {
      throw Error("No existing Skill mathing id");
    }
    wilder.skills = [...wilder.skills, skill];
    return wilderRepository.save(wilder);
}

  export {
    initializeWilder,
    createWilder,
    getWilders,
    getWilderById,
    putWilder,
    deleteWilder,
    addSkillsToWilder
  }