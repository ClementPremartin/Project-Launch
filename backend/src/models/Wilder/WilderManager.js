const {getRepository} = require("../../database/utils");
const { getSchoolByCity } = require("../School/SchoolManager");
const Wilder = require("../Wilder/WilderEntity");
const Skill = require("../Skill/SkillEntity");

async function initializeWilder() {
  const wilderRepository = await getRepository(Wilder);
    await wilderRepository.clear();
    const lyonSchool = await getSchoolByCity("Lyon");
    const brestSchool = await getSchoolByCity("Brest");
    await wilderRepository.save(
        {
          firstname: "Philippe",
          lastname: "LeBrigant",
          school: lyonSchool
        }
      );
      await wilderRepository.save(
        {
          firstname: "Jeanjean",
          lastname: "Bon", 
          school: brestSchool
        }
      );
}

async function getWilders() {
    const wilderRepository = await getRepository(Wilder);
    return wilderRepository.find();
  }

  async function getWilderById(userId) {
    const wilderRepository = await getRepository(Wilder);
    const finalWilder = wilderRepository.findOne({
      where: {
        id: userId
      },
    });
    console.log(finalWilder);
    return finalWilder;
  }

  async function createWilder(firstname, lastname) {
    const wilderRepository = await getRepository(Wilder);
    const newWilder = wilderRepository.create({firstname, lastname});
    await wilderRepository.save(newWilder);
    return newWilder;
  }

  async function putWilder(id, firstname, lastname) {
    const wilderRepository = await getRepository(Wilder);
    const wilderModifications = await wilderRepository.findOneBy({id});
    if(!wilderModifications) {
      throw Error("No existing Wilder")
    };
    return wilderRepository.save({
      id,
      firstname,
      lastname
    });
  }

  async function deleteWilder(id) {
    const wilderRepository = await getRepository(Wilder);
    const existingWilder = await wilderRepository.findOneBy({id});
    if(!existingWilder){
      throw Error("No existing Wilder matching ID");
    }
    return wilderRepository.remove(existingWilder);
  }


  async function addSkillsToWilder(userId, skillId) {
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

  module.exports = {
    initializeWilder,
    createWilder,
    getWilders,
    getWilderById,
    putWilder,
    deleteWilder,
    addSkillsToWilder
  }