const {getDatabase, getWilderRepository} = require("../database/utils");
const Wilder = require("./WilderEntity");

async function initializeWilder() {
    const wilderRepository = (await getDatabase()).getRepository(Wilder);
    await wilderRepository.clear();
    await wilderRepository.save({name: "Jeanjean"});
}

async function getWilders() {
    const wilderRepository = await getWilderRepository();
    return wilderRepository.find();
  }
  
  async function createWilder() {
    return;
  }

  module.exports = {
    initializeWilder,
    createWilder,
    getWilders,
  }