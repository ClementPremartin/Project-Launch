const typeorm = require("typeorm");
const Wilder = require("../models/Wilder/WilderEntity");
const School = require("../models/School/SchoolEntity");

const dataSource = new typeorm.DataSource({
    type: "sqlite",
    database: "wilersdb.sqlite",
    synchronize: true,
    entities: [Wilder, School],
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

async function getWilderRepository() {
    return(await getDatabase()).getRepository(Wilder);
}

async function getSchoolRepository() {
    return(await getDatabase()).getRepository(School);
}

module.exports = {
    getDatabase,
    getWilderRepository,
    getSchoolRepository,
};