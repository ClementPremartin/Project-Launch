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

  async function createWilder(firstname, lastname) {
    const wilderRepository = await getWilderRepository();
    const newWilder = wilderRepository.create({firstname, lastname});
    await wilderRepository.save(newWilder);
    return newWilder;
  }

  module.exports = {
    initializeWilder,
    createWilder,
    getWilders,
  }