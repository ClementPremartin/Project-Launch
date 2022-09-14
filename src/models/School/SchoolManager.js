const {getSchoolRepository, getWilderRepository} = require("../../database/utils");

async function initializeSchool() {
    const schoolRepository = await getSchoolRepository();
    const wilderRepository = await getWilderRepository();
      await wilderRepository.clear();
      await schoolRepository.clear();
      await schoolRepository.save({
        uuid: "cb2616fb-e926-4c4b-822f-7837a24285cf",
        city_name: "Lyon",
      });
      await schoolRepository.save({
        uuid: "be845956-7a07-4320-8d6b-2ebd7a44215c	",
        city_name: "Brest",
      });
  }

async function getSchoolByCity(schoolCity) {
  const schoolRepository = await getSchoolRepository();
  return schoolRepository.findOneBy({city_name: schoolCity});
}

  module.exports = {
    initializeSchool,
    getSchoolByCity,
  }