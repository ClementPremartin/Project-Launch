import express from "express";
import { getDatabase } from "./database/utils";
import { initializeWilder } from "./models/Wilder/WilderManager";
import WilderController from "./controller/WilderController";
import { initializeSchool } from "./models/School/SchoolManager";
import { initializeSkill } from "./models/Skill/SkillManager";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("App running on express server!");
});


const WILDERS_PATH = "/wilders";
app.get(WILDERS_PATH, WilderController.findAllWilders);
app.get(`${WILDERS_PATH}/:id`, WilderController.findWilderById);
app.post(WILDERS_PATH, WilderController.addWilder);
app.put(`${WILDERS_PATH}/:id`, WilderController.modifyWilderById);
app.delete(`${WILDERS_PATH}/:id`, WilderController.deleteWilderById);

app.post(`${WILDERS_PATH}/:id/skills`, WilderController.addSkills);

const PORT = 4000;

const start = async() => {
    await initializeSkill();
    await initializeSchool();
    await initializeWilder();
    await getDatabase();
    app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
}

start();