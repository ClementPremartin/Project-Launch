import { DataSource, EntityTarget, ObjectLiteral } from "typeorm";
import Wilder from "../models/Wilder/WilderEntity";
import School from "../models/School/SchoolEntity";
import Skill from "../models/Skill/SkillEntity";

const dataSource = new DataSource({
  type: "sqlite",
  database: "wilersdb.sqlite",
  synchronize: true,
  entities: [Wilder, School, Skill],
  logging: ["query", "error"],
});

let initialized = false;
async function getDatabase() {
  if (!initialized) {
    await dataSource.initialize();
    initialized = true;
    console.log("Successfuly connected to database");
  }
  return dataSource;
}

async function getRepository(repo: EntityTarget<any>) {
  return (await getDatabase()).getRepository(repo);
}

export { getDatabase, getRepository };

