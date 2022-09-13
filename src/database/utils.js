const typeorm = require("typeorm");
const Wilder = require("../models/WilderEntity");

const dataSource = new typeorm.DataSource({
    type: "sqlite",
    database: "wilersdb.sqlite",
    synchronize: true,
    entities: [Wilder],
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

module.exports = {
    getDatabase,
    getWilderRepository,
};