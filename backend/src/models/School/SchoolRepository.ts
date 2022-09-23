import { Repository } from "typeorm";
import { getRepository } from "../../database/utils";
import School from "./SchoolEntity";
import Wilder from "../Wilder/WilderEntity";


export default class SchoolRepository extends School {
  private static repository: Repository<School>


  static async initializeRepository(){
    this.repository = await getRepository(School);
  }

  static async clearRepository(): Promise<void> {
    this.repository.clear();
  }

  static async initializeSchool(): Promise<void> {
      const wilderRepository = await getRepository(Wilder);
        await wilderRepository.clear();
        await this.clearRepository();
        await this.repository.save({
          city_name: "Lyon",
        });
        await this.repository.save({
          city_name: "Brest",
        });
    }


  static async getSchoolByCity(schoolCity: string) {
    return this.repository.findOneBy({city_name: schoolCity});
  }

  static async getSchoolById(schoolId: string) {
    return this.repository.findOneBy({id: schoolId})
  }

  static async getSchools(): Promise<School[]> {
    return this.repository.find();
  }


}

