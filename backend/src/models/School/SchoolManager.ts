import { getRepository } from "../../database/utils";
import School from "../School/SchoolEntity";
import Wilder from "../Wilder/WilderEntity";

async function initializeSchool(): Promise<void> {
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

async function getSchoolByCity(schoolCity: string) {
  const schoolRepository = await getRepository(School);
  return schoolRepository.findOneBy({city_name: schoolCity});
}

  export {
    initializeSchool,
    getSchoolByCity,
  }