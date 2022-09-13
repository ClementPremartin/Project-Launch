const {getDatabase} = require("../database/utils");
const Wilder = require("./WilderEntity");

async function initializeWilder() {
    const wilderRepository = (await getDatabase()).getRepository(Wilder);
    await wilderRepository.clear();
    await wilderRepository.save({name: "Jeanjean"});
}

async function getWilders() {
    return;
  }
  
  async function createWilder() {
    return;
  }

  module.exports = {
    initializeWilder,
    createWilder,
    getWilders,
  }