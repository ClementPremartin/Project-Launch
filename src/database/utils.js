const typeorm = require("typeorm");
const Wilder = require("../models/Wilder");

const dataSource = new typeorm.DataSource({
    type: "sqlite",
    database: "wilersdb.sqlite",
    synchronize: true,
    entities: [Wilder],
    logging: ["query", "error"],
});

module.exports = {
    dataSource
};