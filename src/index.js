const express = require("express");
const typeorm = require("typeorm");

const app = express();

const dataSource = new typeorm.DataSource({
    type: "sqlite",
    database: "wilersdb.sqlite",
    synchronyse: true,
});

app.get("/", (req, res) => {
    res.send("App running on express server!");
});

const PORT = 4000;

const start = async() => {
    await dataSource.initialize();
    app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
}

start();