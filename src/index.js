const express = require("express");
const typeorm = require("typeorm");
const Wilder = require("./models/Wilder");

const app = express();

const dataSource = new typeorm.DataSource({
    type: "sqlite",
    database: "wilersdb.sqlite",
    synchronize: true,
    entities: [Wilder],
});

app.get("/", (req, res) => {
    res.send("App running on express server!");
});

const PORT = 4000;

const start = async() => {
    await dataSource.initialize();
    await dataSource.getRepository(Wilder).save({name: "Jeanjean"});
    app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
}

start();