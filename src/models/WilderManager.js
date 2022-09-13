const {getWilderRepository} = require("../database/utils");

async function initializeWilder() {
  const wilderRepository = await getWilderRepository();
    await wilderRepository.clear();
    await wilderRepository.save({firstname: "Philippe", lastname: "LeBrigant"});
}

async function getWilders() {
    const wilderRepository = await getWilderRepository();
    return wilderRepository.find();
  }

  async function getWilderById(userId) {
    const wilderRepository = await getWilderRepository();
    const finalWilder = wilderRepository.findOne({
      where: {
        id: userId
      },
    });
    console.log(finalWilder);
    return finalWilder;
  }

  async function createWilder(firstname, lastname) {
    const wilderRepository = await getWilderRepository();
    const newWilder = wilderRepository.create({firstname, lastname});
    await wilderRepository.save(newWilder);
    return newWilder;
  }

  async function putWilder(id, firstname, lastname) {
    const wilderRepository = await getWilderRepository();
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
    const wilderRepository = await getWilderRepository();
    const existingWilder = await wilderRepository.findOneBy({id});
    if(!existingWilder){
      throw Error("No existing Wilder matching ID");
    }
    return wilderRepository.remove(existingWilder);
  }

  module.exports = {
    initializeWilder,
    createWilder,
    getWilders,
    getWilderById,
    putWilder,
    deleteWilder
  }