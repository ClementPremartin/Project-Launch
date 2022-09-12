const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("App running on express server!");
});

app.listen(4000, () => console.log("Server Started On 4000"));