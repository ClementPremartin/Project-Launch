const typeorm = require("typeorm");
const Wilder = require("../models/Wilder/WilderEntity");
const School = require("../models/School/SchoolEntity");
const Skill = require("../models/Skill/SkillEntity");

const dataSource = new typeorm.DataSource({
    type: "sqlite",
    database: "wilersdb.sqlite",
    synchronize: true,
    entities: [Wilder, School, Skill],
    logging: ["query", "error"],
});

let initialized = false;
async function getDatabase() {
    if(!initialized) {
        await dataSource.initialize();
        initialized = true;
        console.log("Successfuly connected to database");
    }
    return dataSource;
}

async function getRepository(repo) {
    return(await getDatabase()).getRepository(repo);
}

module.exports = {
    getDatabase,
    getRepository,
};