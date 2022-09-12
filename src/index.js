const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("App running on express server coucou!");
});

app.listen(3000, () => console.log("Server Started On 3000"));