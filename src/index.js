const express = require("express");
const { getDatabase } = require("./database/utils");
const { initializeWilder } = require("./models/WilderManager");
const WilderController = require("./controller/WilderController");

const app = express();

app.get("/", (req, res) => {
    res.send("App running on express server!");
});


const WILDERS_PATH = "/wilders";
app.get(WILDERS_PATH, WilderController.findAll);

const PORT = 4000;

const start = async() => {
    await initializeWilder();
    await getDatabase();
    app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
}

start();