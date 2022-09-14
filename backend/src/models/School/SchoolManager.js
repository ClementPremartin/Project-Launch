const {getRepository} = require("../../database/utils");
const School = require("../School/SchoolEntity");
const Wilder = require("../Wilder/WilderEntity");

async function initializeSchool() {
    const schoolRepository = await getRepository(School);
    const wilderRepository = await getRepository(Wilder);
      await wilderRepository.clear();
      await schoolRepository.clear();
      await schoolRepository.save({
        city_name: "Lyon",
      });
      await schoolRepository.save({
        city_name: "Brest",
      });
  }

async function getSchoolByCity(schoolCity) {
  const schoolRepository = await getRepository(School);
  return schoolRepository.findOneBy({city_name: schoolCity});
}

  module.exports = {
    initializeSchool,
    getSchoolByCity,
  }